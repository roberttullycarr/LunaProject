from django.urls import path
from user.views import CreateUser, ListAllUsers, ValidateUser

urlpatterns = [
    path('users/list/', ListAllUsers.as_view()),
    path('auth/registration/validate/', CreateUser.as_view()),
    # path('me/', ListUserProfileInfo.as_view()),
    # path('users/<int:user_id>/', RetrieveUserProfile.as_view()),
]

