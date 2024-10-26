from django.contrib import admin
from .models import Sneaker, Order  # Import your models

# Register the models
admin.site.register(Sneaker)
admin.site.register(Order)
