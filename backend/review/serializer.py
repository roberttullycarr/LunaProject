from rest_framework import serializers
from review.models import Review
from user.serializer import UserProfileSerializerPublic


class ReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializerPublic(read_only=True)

    class Meta:
        model = Review
        fields = "__all__"
