from django.urls import path
from comment.views import ListCreateComment, ReadUpdateDeleteComment, CreateLike, ListCommentsUser, ListAllComments


urlpatterns = [
    path('<int:user_id>/', ListCommentsUser.as_view(), name='all-comments-user'),
    path('new/<int:review_id>/', ListCreateComment.as_view(), name='list-create-comment'),
    path('delete/<int:comment_id>/', ReadUpdateDeleteComment.as_view(), name='retrieve-update-destroy-comments'),
    path("toggle-like/<int:comment_id>/", CreateLike.as_view(), name="toggle-like"),
    path("all/<int:review_id>/", ListAllComments.as_view(), name="all-comments"),

]
