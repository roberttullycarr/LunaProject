from django.contrib.auth import get_user_model
from django.db import models

from restaurant.models import Restaurant
from review.models import Review

User = get_user_model()


class Comment(models.Model):

    text = models.TextField(max_length=300)

    review = models.ForeignKey(to=Review, related_name="review", on_delete=models.CASCADE, blank=True,
                                   null=True)

    created = models.DateTimeField(auto_now_add=True)

    modified = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(to=User, related_name="comment_user", on_delete=models.CASCADE, blank=True, null=True)

    likes = models.ManyToManyField(to=User, related_name="comment_likes", blank=True)
