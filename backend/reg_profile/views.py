from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import RegProfile
from .serializer import RegProfileSerializer

User = get_user_model()


class RegisterMail(GenericAPIView):
    queryset = RegProfile.objects.all()
    serializer_class = RegProfileSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        # get user input from request.data
        serializer = self.get_serializer(data=request.data)
        # validate data against model definition
        serializer.is_valid(raise_exception=True)
        # write new RegProfile to database
        serializer.save()
        # filter for the reg_profile that has the same email as request.data
        filtered_queryset = self.get_queryset().filter(email=request.data['email'])
        serializer = self.get_serializer(filtered_queryset, many=True)
        # save the code in a variable to send it by email
        activation_code = serializer.data[0]['code']
        email = serializer.data[0]['email']
        # send validation email to address put in by the user
        send_mail(
            'REGISTRATION code for Luna',
            f'{activation_code}',
            'luna.project.capricorn@gmail.com',
            [f'{email}'],
            fail_silently=False,
        )
        return Response(serializer.data)


# class ResetPasswordView(GenericAPIView):
#     queryset = RegProfile.objects.all()
#     serializer_class = RegProfileSerializer
#     permission_classes = [AllowAny]
#
#     def post(self, request, *args, **kwargs):
#         instance = RegProfile.objects.filter(email=request.data['email'])
#         if instance:
#             reg_profile = RegProfile()
#             reg_profile.save()
#             reset_pw_code = self.get_serializer(reg_profile).data
#             email = request.data['email']
#             send_mail(
#                 'REGISTRATION code for Luna',
#                 f'{reset_pw_code}',
#                 'luna.project.capricorn@gmail.com',
#                 [f'{email}'],
#                 fail_silently=False,
#             )
#             return Response(self.get_serializer(reg_profile).data)
#         else:
#             return Response('no user in request profiles')
#
#
# class ValidateNewPasswordView(GenericAPIView):
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
