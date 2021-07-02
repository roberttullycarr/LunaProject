from django.urls import path
from user.views import CreateUser, ListAllUsers, ListUpdateCurrentUser, SingleUser, ResetPassword, ValidateNewPassword

urlpatterns = [
    path('users/list/', ListAllUsers.as_view()),
    path('auth/registration/validate/', CreateUser.as_view()),
    path('me/', ListUpdateCurrentUser.as_view()),
    path('users/<int:user_id>/', SingleUser.as_view()),
    path('auth/password-reset/', ResetPassword.as_view()),
    path('auth/password-reset/validate/', ValidateNewPassword.as_view()),
]
