from rest_framework import serializers
from user.serializer import UserProfileSerializer
from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    created_by = UserProfileSerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'

