from rest_framework import serializers
from user.serializer import UserProfileSerializerPrivate
from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):

    user = UserProfileSerializerPrivate(read_only=True)

    created_by = UserProfileSerializerPrivate(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'
