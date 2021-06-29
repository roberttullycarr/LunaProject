from django.urls import path
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from review.views import ListCreateReview, SingleRestaurantReviews, SingleUserReviews

urlpatterns = [
    path('reviews/new/<int:restaurant_id>/', ListCreateReview.as_view()),
    path('reviews/restaurant/<int:restaurant_id>/', SingleRestaurantReviews.as_view()),
    path('reviews/user/<int:user_id>/', SingleUserReviews.as_view()),
    path('reviews/<int:review_id>/', RetrieveUpdateDestroyAPIView.as_view()),
    #path('reviews/like/<int:review_id>/', CreateDeleteLike.as_view()),
    #path('/api/reviews/like/<int:review_id>/',.as_view()),
    #path('/api/reviews/likes/',.as_view()),
    #path('/api/reviews/comments/',.as_view()),
]