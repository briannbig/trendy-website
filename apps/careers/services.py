import requests
from django.conf import settings
from typing import List, Dict, Optional

class RecruitmentAPIService:
    """Service to interact with the recruitment API"""
    
    def __init__(self):
        self.base_url = settings.RECRUITMENT_API_BASE_URL
        
    def get_job_postings(self) -> List[Dict]:
        """Fetch all active job postings"""
        try:
            response = requests.get(f"{self.base_url}job-postings/")
            response.raise_for_status()
            data = response.json()
            return data if isinstance(data, list) else []
        except requests.RequestException as e:
            print(f"Error fetching job postings: {e}")
            return []
    
    def get_job_posting(self, job_id: int) -> Optional[Dict]:
        """Fetch a specific job posting by ID"""
        try:
            response = requests.get(f"{self.base_url}job-postings/{job_id}/")
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching job posting {job_id}: {e}")
            return None
    
    def submit_application(self, job_id: int, application_data: Dict) -> bool:
        """Submit a job application"""
        try:
            response = requests.post(
                f"{self.base_url}job-postings/{job_id}/apply/",
                data=application_data,
                files=application_data.get('files', {})
            )
            response.raise_for_status()
            return True
        except requests.RequestException as e:
            print(f"Error submitting application: {e}")
            return False
