from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from restaurant.models import Restaurant
from restaurant.serializer import RestaurantSerializer


class ListCreateRestaurant(ListCreateAPIView):
    """
    get:
    List all Restaurant.
    post:
    Create a new Restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class ListRestaurantsCategory(ListAPIView):
    """
    get:
    List all Restaurants by Category.
    """
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        category_id = self.kwargs.get("category_id")
        return Restaurant.objects.filter(category__id=category_id)


class ListRestaurantsUser(ListAPIView):
    """
    get:
    List all Restaurants created by a specific User.
    """
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Restaurant.objects.filter(user__id=user_id).order_by("-created")


class RetrieveUpdateDestroyRestaurant(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve Restaurant.

    patch:
    Update Restaurant.

    delete:
    Delete Restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'
    permission_classes = [IsAuthenticated]


