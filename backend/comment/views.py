from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from review.models import Review
from comment.permissions import ObjNotLoggedInUser
from comment.models import Comment
from comment.serializer import CommentSerializer


class ListCommentsUser(ListAPIView):
    """
    get:
    List all Comment created by a specific User.
    """
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Comment.objects.filter(created_by__id=user_id).order_by("-created")


class ListCreateComment(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.get(id=self.kwargs["review_id"]).review_comments

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        review = Review.objects.get(id=self.kwargs["review_id"])
        serializer.save(author=self.request.user, review=review)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ReadUpdateDeleteComment(RetrieveUpdateDestroyAPIView):
    """
    put:
    Updates and returns a comment based on the given id

    patch:
    Partially edits and returns a comment based on the given id

    delete:
    Deletes a comment based on the given id
    """

    queryset = Comment
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id>'
    permission_classes = [ObjNotLoggedInUser]


class CreateLike(GenericAPIView):
    """
    post:
    Like Comment for logged-in User.
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated]

    def post(self, request, post_id):

        comment_to_save = self.get_object()
        user = request.user
        if comment_to_save in user.liked_comments.all():
            user.liked_comments.remove(comment_to_save)
            return Response(self.get_serializer(instance=comment_to_save).data)
        user.liked_comments.add(comment_to_save)
        return Response(self.get_serializer(instance=comment_to_save).data)

