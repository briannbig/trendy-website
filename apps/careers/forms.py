from django import forms
from django_recaptcha.fields import ReCaptchaField
from django_recaptcha.widgets import ReCaptchaV2Checkbox

class JobApplicationForm(forms.Form):
    # Personal Information
    first_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your first name'
        })
    )
    
    last_name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your last name'
        })
    )
    
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your email address'
        })
    )
    
    phone = forms.CharField(
        max_length=20,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter your phone number'
        })
    )
    
    address = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 3,
            'placeholder': 'Enter your address (optional)'
        })
    )
    
    linkedin_profile = forms.URLField(
        required=False,
        widget=forms.URLInput(attrs={
            'class': 'form-control',
            'placeholder': 'https://linkedin.com/in/yourprofile'
        })
    )
    
    portfolio_url = forms.URLField(
        required=False,
        widget=forms.URLInput(attrs={
            'class': 'form-control',
            'placeholder': 'https://yourportfolio.com'
        })
    )
    
    # Documents
    resume = forms.FileField(
        required=False,
        widget=forms.FileInput(attrs={
            'class': 'form-control',
            'accept': '.pdf,.doc,.docx'
        }),
        help_text='Upload your resume (PDF, DOC, DOCX)'
    )
    
    cover_letter = forms.FileField(
        required=False,
        widget=forms.FileInput(attrs={
            'class': 'form-control',
            'accept': '.pdf,.doc,.docx'
        }),
        help_text='Upload your cover letter (PDF, DOC, DOCX)'
    )
    
    additional_document1 = forms.FileField(
        required=False,
        widget=forms.FileInput(attrs={
            'class': 'form-control',
            'accept': '.pdf,.doc,.docx'
        }),
        help_text='Upload additional document (optional)'
    )
    
    additional_document2 = forms.FileField(
        required=False,
        widget=forms.FileInput(attrs={
            'class': 'form-control',
            'accept': '.pdf,.doc,.docx'
        }),
        help_text='Upload additional document (optional)'
    )
    
    # Cover Note
    cover_note = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            'class': 'form-control',
            'rows': 5,
            'placeholder': 'Tell us more about your application and why you\'re interested in this position...'
        })
    )
    
    # Source field (hidden, default to website)
    source = forms.CharField(
        initial='website',
        widget=forms.HiddenInput()
    )
    
    # Captcha
    captcha = ReCaptchaField(
        widget=ReCaptchaV2Checkbox(
            attrs={
                'data-theme': 'light',
                'data-size': 'normal',
            }
        )
    )
    
    def clean_resume(self):
        resume = self.cleaned_data.get('resume')
        if resume:
            # Check file size (e.g., max 5MB)
            if resume.size > 5 * 1024 * 1024:
                raise forms.ValidationError('Resume file size should not exceed 5MB.')
            
            # Check file extension
            allowed_extensions = ['.pdf', '.doc', '.docx']
            if not any(resume.name.lower().endswith(ext) for ext in allowed_extensions):
                raise forms.ValidationError('Only PDF, DOC, and DOCX files are allowed.')
        
        return resume
    
    def clean_cover_letter(self):
        cover_letter = self.cleaned_data.get('cover_letter')
        if cover_letter:
            # Check file size (e.g., max 5MB)
            if cover_letter.size > 5 * 1024 * 1024:
                raise forms.ValidationError('Cover letter file size should not exceed 5MB.')
            
            # Check file extension
            allowed_extensions = ['.pdf', '.doc', '.docx']
            if not any(cover_letter.name.lower().endswith(ext) for ext in allowed_extensions):
                raise forms.ValidationError('Only PDF, DOC, and DOCX files are allowed.')
        
        return cover_letter
    
    def clean_additional_document1(self):
        doc = self.cleaned_data.get('additional_document1')
        if doc:
            if doc.size > 5 * 1024 * 1024:
                raise forms.ValidationError('Document file size should not exceed 5MB.')
            
            allowed_extensions = ['.pdf', '.doc', '.docx']
            if not any(doc.name.lower().endswith(ext) for ext in allowed_extensions):
                raise forms.ValidationError('Only PDF, DOC, and DOCX files are allowed.')
        
        return doc
    
    def clean_additional_document2(self):
        doc = self.cleaned_data.get('additional_document2')
        if doc:
            if doc.size > 5 * 1024 * 1024:
                raise forms.ValidationError('Document file size should not exceed 5MB.')
            
            allowed_extensions = ['.pdf', '.doc', '.docx']
            if not any(doc.name.lower().endswith(ext) for ext in allowed_extensions):
                raise forms.ValidationError('Only PDF, DOC, and DOCX files are allowed.')
        
        return doc
    
    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email:
            # Additional email validation if needed
            pass
        return email