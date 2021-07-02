from rest_framework import serializers

from comment.serializer import CommentSerializer
from review.models import Review
from user.serializer import UserProfileSerializerPublic


class ReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializerPublic(read_only=True)
    amount_of_comments_in_review = serializers.SerializerMethodField()
    amount_of_likes_in_review = serializers.SerializerMethodField()
    restaurant_name = serializers.SerializerMethodField()
    two_recent_comments = serializers.SerializerMethodField()

    def get_restaurant_name(self, instance):
        return instance.restaurant.name

    @staticmethod
    def get_amount_of_comments_in_review(instance):
        return instance.comment_review.all().count()

    @staticmethod
    def get_amount_of_likes_in_review(instance):
        return instance.likes.all().count()

    @staticmethod
    def get_two_recent_comments(instance):
        # return instance.comment_review.values().order_by('-created')[:2]
        return CommentSerializer(instance.comment_review.all().order_by('-created')[:2], many=True).data

    class Meta:
        model = Review
        fields = ['user', 'text', 'rating', 'restaurant', 'restaurant_name', 'created', 'modified',
                  'amount_of_comments_in_review', 'amount_of_likes_in_review', 'likes',
                  'two_recent_comments']
