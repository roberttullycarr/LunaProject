from rest_framework import serializers
from user.serializer import UserProfileSerializer
from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        restaurant = super().create(validated_data=validated_data)
        return restaurant
