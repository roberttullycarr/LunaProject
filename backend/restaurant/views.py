from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from restaurant.models import Restaurant
from restaurant.serializer import RestaurantSerializer


class ListRestaurant(ListAPIView):
    """
    get:
    List all Restaurant being anonymous.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [AllowAny]


class ListCreateRestaurant(ListCreateAPIView):
    """
    get:
    List all Restaurant.
    post:
    Create a new Restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class ListRestaurantsCategory(ListAPIView):
    """
    get:
    List all Restaurants by Category.
    """
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'category_code'

    def get_queryset(self):
        category_code = self.kwargs.get("category_code")
        return Restaurant.objects.filter(category=category_code)


class ListRestaurantsUser(ListAPIView):
    """
    get:
    List all Restaurants created by a specific User.
    """
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Restaurant.objects.filter(created_by__id=user_id).order_by("-joined")


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
