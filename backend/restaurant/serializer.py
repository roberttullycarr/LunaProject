from rest_framework import serializers
from user.serializer import UserProfileSerializerPublic
from restaurant.models import Restaurant
from django_countries import countries


class RestaurantSerializer(serializers.ModelSerializer):
    created_by = UserProfileSerializerPublic(read_only=True)
    amount_of_reviews_in_restaurant = serializers.SerializerMethodField()
    avg_rating = serializers.SerializerMethodField()

    @staticmethod
    def get_amount_of_reviews_in_restaurant(instance):
        return instance.review_restaurant.all().count()

    @staticmethod
    def get_avg_rating(instance):
        return instance.average_rating

    class Meta:
        model = Restaurant
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    country = serializers.SerializerMethodField()

    @staticmethod
    def get_country(instance):
        countries_list = []
        for code, name in list(countries):
            countries_list.append({code: name})
        return countries_list

    class Meta:
        model = Restaurant
        fields = ['country']


class RatingsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurant
        fields = ['average_rating']
