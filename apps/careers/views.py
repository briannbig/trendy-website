import requests
from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.http import Http404
import logging

from .forms import JobApplicationForm

logger = logging.getLogger(__name__)


class JobService:
    """Service class to interact with HRM API"""
    
    def __init__(self):
        self.base_url = getattr(settings, 'RECRUITMENT_API_BASE_URL', 'http://localhost:8000/api/')
        self.headers = {
            'Content-Type': 'application/json',
        }
        
        # Add authentication if needed
        api_key = getattr(settings, 'RECRUITMENT_API_KEY', None)
        if api_key:
            self.headers['Authorization'] = f'Bearer {api_key}'
    
    def get_job_posting(self, job_id):
        """Get job posting details from HRM API"""
        try:
            url = f"{self.base_url}job-postings/{job_id}/"
            response = requests.get(url, headers=self.headers, timeout=10)
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 404:
                return None
            else:
                logger.error(f"Error fetching job posting {job_id}: {response.status_code}")
                return None
                
        except requests.RequestException as e:
            logger.error(f"Request exception when fetching job posting {job_id}: {str(e)}")
            return None
    
    def submit_application(self, job_id, form_data, files=None):
        """Submit job application to HRM API"""
        try:
            url = f"{self.base_url}job-postings/{job_id}/apply/"
            
            # Prepare the data structure expected by the API
            candidate_data = {
                'first_name': form_data['first_name'],
                'last_name': form_data['last_name'],
                'email': form_data['email'],
                'phone': form_data['phone'],
                'address': form_data.get('address', ''),
                'linkedin_profile': form_data.get('linkedin_profile', ''),
                'portfolio_url': form_data.get('portfolio_url', ''),
                'source': form_data.get('source', 'website'),
            }
            
            application_data = {
                'candidate_data': candidate_data,
                'cover_note': form_data.get('cover_note', ''),
                'captcha': 'verified',  # Assuming captcha was verified by django-recaptcha
            }
            
            # Prepare files for multipart upload
            files_data = {}
            if files:
                if files.get('resume'):
                    files_data['candidate_data[resume]'] = files['resume']
                if files.get('cover_letter'):
                    files_data['candidate_data[cover_letter]'] = files['cover_letter']
                if files.get('additional_document1'):
                    files_data['additional_document1'] = files['additional_document1']
                if files.get('additional_document2'):
                    files_data['additional_document2'] = files['additional_document2']
            
            # If we have files, use multipart form data
            if files_data:
                # Convert nested data to flat structure for multipart
                flat_data = {}
                for key, value in candidate_data.items():
                    flat_data[f'candidate_data[{key}]'] = value
                flat_data['cover_note'] = application_data['cover_note']
                flat_data['captcha'] = application_data['captcha']
                
                response = requests.post(
                    url, 
                    data=flat_data,
                    files=files_data,
                    timeout=30
                )
            else:
                # JSON data only
                response = requests.post(
                    url,
                    json=application_data,
                    headers=self.headers,
                    timeout=30
                )
            
            if response.status_code == 201:
                return {'success': True, 'message': 'Application submitted successfully'}
            else:
                logger.error(f"Application submission failed: {response.status_code} - {response.text}")
                try:
                    error_data = response.json()
                    return {'success': False, 'errors': error_data}
                except:
                    return {'success': False, 'errors': {'detail': 'Application submission failed'}}
                    
        except requests.RequestException as e:
            logger.error(f"Request exception when submitting application: {str(e)}")
            return {'success': False, 'errors': {'detail': 'Network error occurred'}}


def job_detail(request, job_id):
    """
    Display job details and handle application submission
    """
    job_service = JobService()
    
    # Get job posting from HRM API
    job_posting = job_service.get_job_posting(job_id)
    if not job_posting:
        raise Http404("Job posting not found")
    
    # Check if job is active
    is_active = job_posting.get('is_active', False)
    
    if request.method == 'POST':
        if not is_active:
            messages.error(request, 'This job posting is no longer accepting applications.')
            return redirect('job_detail', job_id=job_id)
        
        form = JobApplicationForm(request.POST, request.FILES)
        
        if form.is_valid():
            # Extract form data
            form_data = form.cleaned_data
            
            # Extract files
            files = {}
            for field_name in ['resume', 'cover_letter', 'additional_document1', 'additional_document2']:
                if form_data.get(field_name):
                    files[field_name] = form_data[field_name]
            
            # Submit application
            result = job_service.submit_application(job_id, form_data, files)
            
            if result['success']:
                messages.success(
                    request, 
                    'Your application has been submitted successfully! We will review it and get back to you soon.'
                )
                return redirect('careers:job_detail', job_id=job_id)
            else:
                # Handle API errors
                errors = result.get('errors', {})
                
                # Add field-specific errors to form
                for field, error_list in errors.items():
                    if field in form.fields:
                        if isinstance(error_list, list):
                            form.add_error(field, error_list[0])
                        else:
                            form.add_error(field, str(error_list))
                    elif field == 'candidate_data':
                        # Handle nested candidate data errors
                        if isinstance(error_list, dict):
                            for sub_field, sub_error in error_list.items():
                                if sub_field in form.fields:
                                    if isinstance(sub_error, list):
                                        form.add_error(sub_field, sub_error[0])
                                    else:
                                        form.add_error(sub_field, str(sub_error))
                
                # Add general error message
                if 'detail' in errors:
                    messages.error(request, errors['detail'])
                else:
                    messages.error(request, 'There was an error submitting your application. Please check the form and try again.')
    else:
        form = JobApplicationForm()
    
    context = {
        'job_posting': job_posting,
        'form': form,
        'is_active': is_active,
    }
    return render(request, 'careers/job_detail.html', context)


def careers_list(request):
    """
    Display list of available job postings
    """
    job_service = JobService()
    
    try:
        url = f"{job_service.base_url}job-postings/"
        params = {}
        
        # Handle search
        search = request.GET.get('search')
        if search:
            params['search'] = search
        
        # Handle ordering
        ordering = request.GET.get('ordering', '-created_at')
        params['ordering'] = ordering
        
        response = requests.get(url, headers=job_service.headers, params=params, timeout=10)
        
        if response.status_code == 200:
            job_postings = response.json() if isinstance(response.json(), list) else response.json().get('results', [])
        else:
            job_postings = []
            messages.error(request, 'Unable to fetch job postings at the moment.')
            
    except requests.RequestException as e:
        logger.error(f"Error fetching job postings: {str(e)}")
        job_postings = []
        messages.error(request, 'Unable to fetch job postings at the moment.')
    
    context = {
        'job_postings': job_postings,
        'search': search,
    }
    
    return render(request, 'careers/careers_list.html', context)