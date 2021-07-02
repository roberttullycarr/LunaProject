from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    text = models.TextField(max_length=1000)

    rating = models.IntegerField(default=0, validators=[
        MinValueValidator(0),
        MaxValueValidator(5)
    ])

    restaurant = models.ForeignKey(to=Restaurant, related_name="review_restaurant", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, related_name="review_user", on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name="review_likes", blank=True)

    def __str__(self):
        return f" User: {self.user}. Review: {self.text}"
