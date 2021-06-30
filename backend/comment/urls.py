from django.urls import path
from comment.views import ListCreateComment, ReadUpdateDeleteComment, CreateLike


urlpatterns = [
    path('<int:user_id>/', ListCreateComment.as_view(), name='all-comments-user'),
    path('new/<int:review_id>/', ListCreateComment.as_view(), name='list-create-comment'),
    path('<int:comment_id>/', ReadUpdateDeleteComment.as_view(), name='retrieve-update-destroy-comments'),
    path("toggle-like/<int:comment_id>/", CreateLike.as_view(), name="toggle-like"),
]
