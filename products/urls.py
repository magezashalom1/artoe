from django.urls import path
from .views import SneakerListView, sneaker_detail

urlpatterns = [
    path('', SneakerListView.as_view(), name='sneaker-list'),  # URL for listing sneakers
    path('<int:pk>/', sneaker_detail, name='sneaker-detail'),  # URL for sneaker details
] 


