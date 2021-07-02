from django.db.models import Q
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from restaurant.models import Restaurant
from restaurant.serializer import RestaurantSerializer
from review.models import Review
from review.serializer import ReviewSerializer
from user.models import User
from user.serializer import UserProfileSerializerPublic


class SearchReviewRestaurantUser(GenericAPIView):
    """
    get:
    General search for restaurant, user, and review using
    type: "restaurants", "users" and "reviews"
    and
    search_string by each(restaurants, users, and reviews) search field keys
    """
    permission_classes = [AllowAny]

    def get_queryset(self):
        type_param = self.request.query_params["type"]
        if type_param == "reviews":
            return Review.objects.all()

        if type_param == "restaurants":
            return Restaurant.objects.all()

        if type_param == "users":
            return User.objects.all()

    def get_serializer_class(self):
        type_param = self.request.query_params["type"]
        if type_param == "reviews":
            return ReviewSerializer

        if type_param == "restaurants":
            return RestaurantSerializer

        if type_param == "users":
            return UserProfileSerializerPublic

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        type_search = self.request.query_params.get('type')

        if search_string and type_search:
            if type_search == "reviews":
                queryset = Review.objects.filter(
                    Q(restaurant__name__icontains=search_string) | Q(text__icontains=search_string)
                    | Q(user__first_name__icontains=search_string) | Q(user__last_name__icontains=search_string))

            if type_search == "restaurants":
                queryset = Restaurant.objects.filter(
                    Q(name__icontains=search_string) | Q(category__icontains=search_string)
                    | Q(country__icontains=search_string) | Q(city__icontains=search_string)
                    | Q(street__icontains=search_string))

            if type_search == "users":
                queryset = User.objects.filter(
                    Q(username__icontains=search_string) | Q(first_name__icontains=search_string)
                    | Q(last_name__icontains=search_string))

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
