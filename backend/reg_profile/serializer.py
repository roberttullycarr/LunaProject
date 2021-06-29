from rest_framework import serializers

from .models import RegProfile


class RegProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegProfile
        fields = ['email', 'code']
