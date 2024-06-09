from django.urls import  re_path, path
from . import views


urlpatterns = [
    re_path('login/', views.LoginView.as_view(), name='login'),
    re_path('signup/', views.signup, name='signup'),
    re_path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    re_path('get_csrf_token/', views.get_csrf_token, name='get_token'),
    
]