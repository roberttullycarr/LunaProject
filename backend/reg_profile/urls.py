from django.urls import path
from .views import RegisterMail

urlpatterns = [
    path('', RegisterMail.as_view()),

]
