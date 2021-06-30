from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import RegProfile
from .serializer import RegProfileSerializer

User = get_user_model()


class RegisterMail(GenericAPIView):
    """
    post:
    Create a new registation profile with generated code. Sends email with code to sent email adress.
    """
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
