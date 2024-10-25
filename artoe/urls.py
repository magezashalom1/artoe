from django.contrib import admin
from django.urls import path, include
from products.views import SneakerListView  # Import the sneaker list view
from homepage.views import homepage  # Import the homepage view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name='home'),  # Home points to the homepage view
    path('products/', SneakerListView.as_view(), name='sneaker_list'),  # Products app URLs
]



