import random

from django.db import models


# snippet to generate random code
def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegProfile(models.Model):
    code = models.CharField(max_length=5, default=code_generator)

    activated = models.BooleanField(default=False)

    action = models.CharField(max_length=100)

    email = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return f'Email: {self.email} - code: {self.code}'

    def my_password_reset(self):
        self.passcode = code_generator()
