from django.urls import path
from .views import SneakerList, SneakerDetail, home, LatestSneakersView  # Import the home view


urlpatterns = [
    path('', home, name='home'),  # Map the root URL to the home view
    path('sneakers/', SneakerList.as_view(), name='sneaker-list'),
    path('sneakers/latest/', LatestSneakersView.as_view(), name='latest-sneakers'),
    path('sneakers/<int:pk>/', SneakerDetail.as_view(), name='sneaker-detail'),
]
