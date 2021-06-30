from rest_framework import serializers
from user.serializer import UserProfileSerializerPublic
from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    created_by = UserProfileSerializerPublic(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'
