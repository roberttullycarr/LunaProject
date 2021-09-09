from django.db import models
from django.contrib.auth.models import AbstractUser
from reg_profile.models import RegProfile
# Hello


class User(AbstractUser):

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(unique=True, verbose_name='username', max_length=200)
    location = models.CharField(verbose_name='location', max_length=40, blank=True)
    phone = models.IntegerField(blank=True, null=True)
    things_i_love = models.CharField(verbose_name='things_i_love', max_length=200, blank=True)
    description = models.CharField(verbose_name='description', max_length=400, blank=True)
    profile_picture = models.ImageField(upload_to='user_media', blank=True, null=True)
    code = models.CharField(max_length=60, blank=True, null=True)
    activated = models.BooleanField(default=False)
    reg_profile = models.ForeignKey(to=RegProfile, related_name="review_user", on_delete=models.CASCADE, blank=True,
                                    null=True)

    def __str__(self):
        return self.username

