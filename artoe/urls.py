from django.contrib import admin
from django.urls import path, include
from products.views import SneakerListView  # Import the list view if using as home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', SneakerListView.as_view(), name='home'),  # Home redirects to sneaker list
    path('products/', include('products.urls')),  # Products app URLs
] 

