from rest_framework import serializers

from .models import User


class UserProfileSerializerPrivate(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'


class UserProfileSerializerPublic(serializers.ModelSerializer):
    total_user_comments = serializers.SerializerMethodField()
    total_user_reviews = serializers.SerializerMethodField()

    @staticmethod
    def get_total_user_comments(user):
        return user.comment_user.all().count()

    @staticmethod
    def get_total_user_reviews(user):
        return user.review_user.all().count()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'location', 'things_i_love', 'description',
                  'profile_picture', 'date_joined', 'total_user_comments', 'total_user_reviews']
