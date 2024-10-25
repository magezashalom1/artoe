from django.urls import path
from .views import SneakerList, SneakerDetail

urlpatterns = [
    path('sneakers/', SneakerList.as_view(), name='sneaker-list'),
    path('sneakers/<int:pk>/', SneakerDetail.as_view(), name='sneaker-detail'),
]
