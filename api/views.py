from django.shortcuts import render
from rest_framework import generics
from .models import Sneaker, Order
from .serializers import SneakerSerializer, OrderSerializer

# Serve the React app's homepage
def home(request):
    return render(request, 'index.html')

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

class LatestSneakersView(generics.ListAPIView):
    queryset = Sneaker.objects.order_by('-id')[:10]  # Adjust to fetch the latest sneakers
    serializer_class = SneakerSerializer