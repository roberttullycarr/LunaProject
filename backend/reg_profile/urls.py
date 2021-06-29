from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import RegisterMail

urlpatterns = [
    path('', RegisterMail.as_view()),
    # path('password-reset/', ResetPasswordView.as_view()),
    # path('password-reset/validate/', ValidateNewPasswordView.as_view()),
]
