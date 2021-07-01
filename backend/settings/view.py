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

"""
    get:
    General search for restaurant, user, and review using 
    type: "restaurant", "user" and "review"
    and 
    search_string by each(restaurant, user, and review) search field keys
"""


class SearchReviewRestaurantUser(GenericAPIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        type_param = self.request.query_params["type"]
        if type_param == "review":
            return Review.objects.all()

        if type_param == "restaurant":
            return Restaurant.objects.all()

        if type_param == "user":
            return User.objects.all()

    def get_serializer_class(self):
        type_param = self.request.query_params["type"]
        if type_param == "review":
            return ReviewSerializer

        if type_param == "restaurant":
            return RestaurantSerializer

        if type_param == "user":
            return UserProfileSerializerPublic

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        type_search = self.request.query_params.get('type')

        if search_string and type_search:
            if type_search == "review":
                queryset = Review.objects.filter(
                    Q(restaurant__name__icontains=search_string) | Q(text__icontains=search_string))

            if type_search == "restaurant":
                queryset = Restaurant.objects.filter(Q(name__icontains=search_string) | Q(category__icontains=search_string)
                                                     | Q(country__icontains=search_string) | Q(city__icontains=search_string)
                                                     | Q(street__icontains=search_string))

            if type_search == "user":
                queryset = User.objects.filter(Q(username__icontains=search_string) | Q(first_name__icontains=search_string)
                                               | Q(last_name__icontains=search_string))

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
