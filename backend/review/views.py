from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, \
    ListAPIView
from rest_framework.response import Response
from restaurant.models import Restaurant
from review.models import Review
from review.serializer import ReviewSerializer


class ListCreateReview(ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    # permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.get(id=self.kwargs["restaurant_id"]).restaurant_review

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        restaurant = Restaurant.objects.get(id=self.kwargs["restaurant_id"])
        serializer.save(user=self.request.user, restaurant=restaurant)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SingleRestaurantReviews(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "restaurant_id"

    def get_queryset(self):
        restaurant_id = self.kwargs.get("restaurant_id")
        return Review.objects.filter(restaurant=restaurant_id)


class SingleUserReviews(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "user_id"

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Review.objects.filter(user=user_id)


class ReadUpdateDeleteReview(RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'
    # permission_classes = []


class CreateDeleteLike(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_url_kwarg = 'review_id'

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        user = request.user
        if review not in user.review_likes.all():
            user.review_likes.add(review)
        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, *args, **kwargs):
        review = self.get_object()
        user = request.user
        if review in user.review_likes.all():
            user.review_likes.remove(review)
        return Response(status=status.HTTP_204_NO_CONTENT)


class ListLikedView(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request):
        queryset = self.get_queryset().filter(likes=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ListCommentedView(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get(self, request):
        queryset = self.get_queryset().filter(comment_review__user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
