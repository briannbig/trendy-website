from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.http import Http404
from .services import RecruitmentAPIService
from .forms import JobApplicationForm
from .models import JobApplication

def careers_list(request):
    """Display all available job postings"""
    api_service = RecruitmentAPIService()
    job_postings = api_service.get_job_postings()
    
    context = {
        'job_postings': job_postings,
        'page_title': 'Career Opportunities'
    }
    return render(request, 'careers/careers_list.html', context)

def job_detail(request, job_id):
    """Display job details and application form"""
    api_service = RecruitmentAPIService()
    job_posting = api_service.get_job_posting(job_id)
    
    if not job_posting:
        raise Http404("Job posting not found")
    
    if request.method == 'POST':
        form = JobApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            # Save application locally
            application = form.save(commit=False)
            application.job_posting_id = job_id
            application.job_title = job_posting.get('title', '')
            application.save()
            
            # Prepare data for API submission
            application_data = {
                'candidate_data': {
                    'first_name': application.first_name,
                    'last_name': application.last_name,
                    'email': application.email,
                    'phone': application.phone,
                    'address': application.address,
                    'linkedin_profile': application.linkedin_profile,
                    'portfolio_url': application.portfolio_url,
                    'source': 'website'
                },
                'cover_note': application.cover_note,
                'captcha': form.cleaned_data.get('captcha')
            }
            
            # Add files if they exist
            files = {}
            if application.resume:
                files['resume'] = application.resume.file
            if application.cover_letter:
                files['cover_letter'] = application.cover_letter.file
            if application.additional_document1:
                files['additional_document1'] = application.additional_document1.file
            if application.additional_document2:
                files['additional_document2'] = application.additional_document2.file
            
            application_data['files'] = files
            
            # Submit to API
            success = api_service.submit_application(job_id, application_data)
            
            if success:
                messages.success(request, 'Your application has been submitted successfully!')
                return redirect('careers:careers_list')
            else:
                messages.error(request, 'There was an error submitting your application. Please try again.')
    else:
        form = JobApplicationForm()
    
    context = {
        'job_posting': job_posting,
        'form': form,
        'page_title': f"Apply for {job_posting.get('title', 'Position')}"
    }
    return render(request, 'careers/job_detail.html', context)
