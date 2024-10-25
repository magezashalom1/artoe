
from django.urls import path
from .views import SneakerListView, sneaker_detail

urlpatterns = [
    path('', SneakerListView.as_view(), name='sneaker-list'),
    path('<int:pk>/', sneaker_detail, name='sneaker-detail'),  # Detail view
]