import random

from django.db.models import Q
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import User
from .serializer import UserProfileSerializerPrivate, UserProfileSerializerPublic
from reg_profile.models import RegProfile
from rest_framework.permissions import AllowAny


class CreateUser(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPrivate
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        reg_queryset = RegProfile.objects.filter(Q(email=request.data['email']) & Q(code=request.data['code']))
        if reg_queryset:
            serializer.save(reg_profile=reg_queryset[0], activated=True)
            return Response(serializer.data)
        else:
            return Response(data={"error": "Wrong code, try again."}, status=404)


class ListAllUsers(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPublic

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListUpdateCurrentUser(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPrivate

    def get(self, request, *args, **kwargs):
        queryset = User.objects.get(pk=request.user.id)
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        queryset = self.get_queryset().get(pk=request.user.id)
        serializer = self.get_serializer(queryset, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class SearchUser(GenericAPIView):
    serializer_class = UserProfileSerializerPublic

    def get(self, request, *args, **kwargs):
        search_key = self.request.query_params.get('keyword')
        queryset = User.objects.filter(username__contains=search_key)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class SingleUser(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPublic
    lookup_url_kwarg = 'user_id'

    def get(self, request, *args, **kwargs):
        queryset = self.get_object()
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)

# snippet to generate random code
def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class ResetPassword(GenericAPIView):
    serializer_class = UserProfileSerializerPublic
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        queryset = User.objects.filter(email=request.data['email'])
        if queryset:
            reset_pw_code = code_generator()
            email = request.data['email']
            queryset.update(code=reset_pw_code)
            send_mail(
                'REST PASSWORD code for Luna',
                f'{reset_pw_code}',
                'luna.project.capricorn@gmail.com',
                [f'{email}'],
                fail_silently=False,
            )
            return Response(self.get_serializer().data)
        else:
            return Response(data={"error": "Wrong email, try again."}, status=404)


# class ValidateNewPassword(GenericAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserProfileSerializerPrivate
#     permission_classes = [AllowAny]
#
#     def post(self, request, *args, **kwargs):
#         instance = RegProfile.objects.filter(Q(email=request.data['email']) & Q(code=request.data['code']))
#         if instance:
#             # creating the user object
#             # todo
#             # - where to handle / check the password_repeat?
#             # - password are not hashed yet
#             user = User(email=request.data['email'],
#                         password=request.data['password'])
#             user.save()
#             return Response(self.get_serializer(user).data)
#         else:
#             return Response('no user in request profiles')