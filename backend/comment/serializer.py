from rest_framework import serializers
from user.serializer import UserProfileSerializerPublic
from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = UserProfileSerializerPublic(read_only=True)
    logged_in_user_liked = serializers.SerializerMethodField()

    def get_logged_in_user_liked(self, comment):
        user = self.context['request'].user
        if comment in user.liked_comments.all():
            return True
        return False

    class Meta:
        model = Comment
        fields = '__all__'
        # read_only_fields = ['author', 'post']
