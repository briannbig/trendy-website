from django.shortcuts import render

def home(request):
    """Home page view"""
    return render(request, 'main/home.html')

def about(request):
    """About page view"""
    return render(request, 'main/about.html')
