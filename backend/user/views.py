from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from django.core.mail import send_mail
from .models import User
from .serializer import UserProfileSerializerPrivate, UserProfileSerializerPublic
from reg_profile.models import RegProfile
from reg_profile.serializer import RegProfileSerializer
from rest_framework.permissions import AllowAny
import random


class CreateUser(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPrivate
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        reg_queryset = RegProfile.objects.all().filter(email=request.data['email'])
        reg_serializer = RegProfileSerializer(reg_queryset)
        if reg_serializer['code'] == request.data['code']:
            serializer.save(reg_profile=reg_serializer)
            return Response(serializer.data)
        else:
            return Response(data={"error": "Wrong code, try again."}, status=404)



class ValidateUser(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPrivate
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ListAllUsers(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPrivate

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
