from rest_framework import serializers

from .models import User


class UserProfileSerializerPrivate(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class UserProfileSerializerPublic(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'date_joined', 'first_name', 'last_name', 'profile_picture']