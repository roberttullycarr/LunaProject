from django.urls import path
from review.views import ListCreateReview, SingleRestaurantReviews, SingleUserReviews, ReadUpdateDeleteReview, \
    CreateDeleteLike, ListLikedView, ListCommentedView, SearchReview

urlpatterns = [
    path('find/?search=<str:search_string>', SearchReview.as_view()),
    path('new/<int:restaurant_id>/', ListCreateReview.as_view()),
    path('restaurant/<int:restaurant_id>/', SingleRestaurantReviews.as_view()),
    path('user/<int:user_id>/', SingleUserReviews.as_view()),
    path('<int:review_id>/', ReadUpdateDeleteReview.as_view()),
    path('like/<int:review_id>/', CreateDeleteLike.as_view()),
    path('likes/', ListLikedView.as_view()),
    path('comments/', ListCommentedView.as_view()),
]