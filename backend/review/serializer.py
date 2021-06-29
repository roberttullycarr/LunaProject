from rest_framework import serializers
from review.models import Review
from user.serializer import UserProfileSerializer


class ReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"
