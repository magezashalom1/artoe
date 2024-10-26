from rest_framework import generics
from .models import Sneaker, Order
from .serializers import SneakerSerializer, OrderSerializer

class SneakerList(generics.ListCreateAPIView):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer

class SneakerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer

class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
