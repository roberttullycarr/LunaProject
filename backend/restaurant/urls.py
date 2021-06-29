from django.urls import path
from restaurant.views import ListCreateRestaurant, RetrieveUpdateDestroyRestaurant, ListRestaurantsUser, \
    ListRestaurantsCategory, ListRestaurant


urlpatterns = [
    path('', ListRestaurant.as_view(), name='list-all-restaurants'),
    path('new/', ListCreateRestaurant.as_view(), name='list-create-restaurant'),
    path('category/<str:category_code>/', ListRestaurantsCategory.as_view(), name='list-restaurant-category'),
    path('user/<int:user_id>/', ListRestaurantsUser.as_view(), name='list-restaurant-user'),
    path("<int:id>/", RetrieveUpdateDestroyRestaurant.as_view(), name="get-destroy-update-restaurant"),
]
