from django.urls import path
from .views import SneakerList, SneakerDetail, home  # Import the home view

urlpatterns = [
    path('', home, name='home'),  # Map the root URL to the home view
    path('sneakers/', SneakerList.as_view(), name='sneaker-list'),
    path('sneakers/<int:pk>/', SneakerDetail.as_view(), name='sneaker-detail'),
]