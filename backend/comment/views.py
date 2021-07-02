from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from review.models import Review
from comment.models import Comment
from comment.serializer import CommentSerializer


class ListCommentsUser(ListAPIView):
    """
    get:
    List all Comment by a specific User.
    """
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Comment.objects.filter(user__id=user_id).order_by("-created")


class ListCreateComment(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.get(id=self.kwargs["review_id"]).comment_review

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        review = Review.objects.get(id=self.kwargs["review_id"])
        serializer.save(user=self.request.user, review=review)

        send_mail(
            'Someone just commented on your review!',
            f'Your review just got a comment from {self.request.user.username}!',
            'luna.project.capricorn@gmail.com',
            [f'{review.user.email}'],
            fail_silently=False,
        )
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

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated]


class CreateLike(UpdateAPIView):
    """
    post:
    Like Comment for logged-in User.
    """
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):

        comment_to_save = Comment.objects.get(id=kwargs['comment_id'])
        user = request.user
        if comment_to_save in user.comment_likes.all():
            comment_to_save.likes.remove(user)
            return Response(self.get_serializer(comment_to_save).data)
        comment_to_save.likes.add(user)
        return Response(self.get_serializer(comment_to_save).data)


class ListAllComments(ListAPIView):
    """
    get:
    List all comments in a review.
    """

    serializer_class = CommentSerializer
    lookup_url_kwarg = 'review_id'

    def get_queryset(self):
        review_id = self.kwargs.get("review_id")
        return Comment.objects.filter(review__id=review_id).order_by("-created")
