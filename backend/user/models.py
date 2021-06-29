from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from settings import settings


class User(AbstractUser):

    phone_regex = RegexValidator(regex=r'^+?1?\d{9,15}$', message="Phone number must be entered in "
                                                                  "the format: '+999999999'. Up to 15 "
                                                                  "digits allowed.")
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(unique=True, verbose_name='username', max_length=200)
    location = models.CharField(verbose_name='location', max_length=40, blank=True)
    phone = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    things_i_love = models.CharField(verbose_name='things_i_love', max_length=200, blank=True)
    description = models.CharField(verbose_name='description', max_length=400, blank=True)
    friends_with = models.ManyToManyField(to=settings.AUTH_USER_MODEL, blank=True, related_name="friends_of")
    profile_picture = models.ImageField(upload_to='user_media', blank=True, null=True)

    def __str__(self):
        return self.username
