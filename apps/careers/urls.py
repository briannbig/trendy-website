from django.urls import path
from . import views

app_name = 'careers'

urlpatterns = [
    path('', views.careers_list, name='careers_list'),
    path('job/<int:job_id>/', views.job_detail, name='job_detail'),
]
