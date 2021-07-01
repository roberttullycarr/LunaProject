from django.urls import path
from comment.views import ListCreateComment, ReadUpdateDeleteComment, CreateLike, ListCommentsUser, ListTwoComments


urlpatterns = [
    path('<int:user_id>/', ListCommentsUser.as_view(), name='all-comments-user'),
    path('new/<int:review_id>/', ListCreateComment.as_view(), name='list-create-comment'),
    path('delete/<int:comment_id>/', ReadUpdateDeleteComment.as_view(), name='retrieve-update-destroy-comments'),
    path("toggle-like/<int:comment_id>/", CreateLike.as_view(), name="toggle-like"),
    path("recent/<int:review_id>/", ListTwoComments.as_view(), name="two-comments"),

]
