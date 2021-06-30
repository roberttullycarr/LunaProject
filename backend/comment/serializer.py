from rest_framework import serializers
from user.serializer import UserProfileSerializerPublic
from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    user = UserProfileSerializerPublic(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        # read_only_fields = ['author', 'post']
