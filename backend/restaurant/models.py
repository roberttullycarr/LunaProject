from django.contrib.auth import get_user_model
from django.db import models
from django_countries.fields import CountryField

User = get_user_model()


class Restaurant(models.Model):

    CATEGORIES = (
        ('IT', 'Italian'),
        ('IND', 'Indian'),
        ('CN', 'Chinese'),
        ('JP', 'Japanese'),
        ('TH', 'Thai'),
        ('VNZ', 'Venezuelan'),
        ('CH', 'Swiss'),
        ('DE', 'German'),
        ('FR', 'French'),
        ('MNG', 'Mongolian'),
        ('GK', 'Greek'),
        ('SP', 'Spanish'),
        ('MEX', 'Mexican'),
        ('PT', 'Portugal'),
        ('BE', 'Belgium')
    )

    PRICELEVEL = (
        ('1', '$'),
        ('2', '$$'),
        ('3', '$$$')
    )

    name = models.CharField(verbose_name='name', max_length=100)
    category = models.TextField(choices=CATEGORIES)
    country = CountryField()
    street = models.CharField(verbose_name='street', max_length=40)
    city = models.CharField(verbose_name='city', max_length=20)
    zip = models.IntegerField(verbose_name='zip', blank=True, null=True)
    website = models.CharField(verbose_name='website', max_length=100, blank=True)
    phone = models.CharField(verbose_name='phone', max_length=17)
    email = models.EmailField(unique=True, blank=True, null=True)
    opening_hours = models.CharField(verbose_name='opening_hours', max_length=40)
    price_level = models.TextField(choices=PRICELEVEL, blank=True)
    image = models.ImageField(upload_to='restaurant_media', blank=True, null=True)
    joined = models.DateTimeField(verbose_name='joined', auto_now_add=True)
    created_by = models.ForeignKey(to=User, related_name="restaurants", on_delete=models.CASCADE,
                                   blank=True, null=True)

    @property
    def average_rating(self):
        total_rating = sum([int(review.rating) for review in self.review_restaurant.all()])
        if total_rating != 0:
            return total_rating/self.review_restaurant.count()
        else:
            return 0

    def __str__(self):
        return f"{self.name}. Website: {self.website}"
