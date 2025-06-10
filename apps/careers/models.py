from django.db import models

class JobApplication(models.Model):
    # Basic info
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField(blank=True)
    
    # Job details
    job_posting_id = models.IntegerField()
    job_title = models.CharField(max_length=200)
    
    # Documents
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    cover_letter = models.FileField(upload_to='cover_letters/', blank=True, null=True)
    additional_document1 = models.FileField(upload_to='additional_docs/', blank=True, null=True)
    additional_document2 = models.FileField(upload_to='additional_docs/', blank=True, null=True)
    
    # Additional info
    linkedin_profile = models.URLField(blank=True)
    portfolio_url = models.URLField(blank=True)
    cover_note = models.TextField(blank=True)
    source = models.CharField(max_length=100, default='website')
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.job_title}"
