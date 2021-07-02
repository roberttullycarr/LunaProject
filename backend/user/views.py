import random
from django.db.models import Q
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from .models import User
from .serializer import UserProfileSerializerPrivate, UserProfileSerializerPublic
from reg_profile.models import RegProfile
from rest_framework.permissions import AllowAny


class CreateUser(GenericAPIView):
    """
    post:
    Create a new user.
    """
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


class ListAllUsers(ListAPIView):
    """
    get:
    List all user.
    """
    queryset = User.objects.all()
    serializer_class = UserProfileSerializerPublic


class ListUpdateCurrentUser(GenericAPIView):
    """
    get:
    List current/logged in user.
    post:
    Update current/logged in user. Send en email for each profile update to the user.
    """
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
        send_mail(
            'Send an email when the user updates the profile',
            f'You have successfully updated your profile!',
            'luna.project.capricorn@gmail.com',
            [f'{self.request.user.email}'],
            fail_silently=False,
        )
        return Response(serializer.data)


class SingleUser(GenericAPIView):
    """
    get:
    List single user.
    """
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
    """
    post:
    Reset password of user. Send a new code to email
    """
    serializer_class = UserProfileSerializerPublic
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if 'email' in request.data:
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
        else:
            return Response(data={"error": "No email, try again."}, status=404)


class ValidateNewPassword(GenericAPIView):
    """
    post:
    Validate the sent code and change the password.
    """
    serializer_class = UserProfileSerializerPrivate
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        if 'code' in request.data and 'password' in request.data:
            queryset = User.objects.filter(code=request.data['code'])
            if queryset:
                queryset.update(password=request.data['password'])
                return Response(self.get_serializer().data)
            else:
                return Response(data={"error": "Wrong code, try again."}, status=404)
        else:
            return Response(data={"error": "No code or no password, try again."}, status=404)
