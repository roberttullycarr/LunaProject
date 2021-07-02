from django.core.mail import send_mail
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny
from restaurant.models import Restaurant
from restaurant.serializer import RestaurantSerializer, CountrySerializer
from user.permissions import IsObjectAuthorOrReadOnly


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
    Create a new Restaurant and send a created restaurant to email
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
        send_mail(
            'New restaurant user just created',
            f'Congratulations! You have just created the {serializer.data["name"]} restaurant!',
            'luna.project.capricorn@gmail.com',
            [f'{self.request.user.email}'],
            fail_silently=False,
        )


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
    Send an email per updates of created restaurant

    delete:
    Delete Restaurant.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'
    permission_classes = [IsObjectAuthorOrReadOnly]

    def perform_update(self, serializer):
        serializer.save()
        send_mail(
            'Send an email when user updates the restaurant that created',
            f'You have successfully updated the {serializer.data["name"]} restaurant!',
            'luna.project.capricorn@gmail.com',
            [f'{self.request.user.email}'],
            fail_silently=False,
        )


class ListCountryRestaurant(ListAPIView):
    """
    get:
    List all country.
    """

    serializer_class = CountrySerializer

    def get_queryset(self):
        result_id = Restaurant.objects.values()[0]['id']
        return Restaurant.objects.filter(id=result_id)


class ListFourBestRestaurants(ListAPIView):
    """
    get:
    List four best restaurants.
    """

    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return sorted(Restaurant.objects.all(), key=lambda restaurant: restaurant.average_rating, reverse=True)[:4]
