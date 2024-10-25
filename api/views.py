from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Sneaker
from .serializers import SneakerSerializer

class SneakerList(generics.ListCreateAPIView):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer

class SneakerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer





