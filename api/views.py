from django.shortcuts import render
from rest_framework import generics
from .models import Sneaker, Order
from .serializers import SneakerSerializer, OrderSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from .serializers import UserSerializer
from social_django.utils import psa
from django.contrib.auth.models import User


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


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created successfully'}, status=201)
        return Response(serializer.errors, status=400)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response({'message': 'Login successful'}, status=200)
        return Response({'message': 'Invalid credentials'}, status=400)


class GoogleAuthView(APIView):
    permission_classes = [AllowAny]

    @psa('social:complete')
    def post(self, request):
        token = request.data.get('token')
        user = request.backend.do_auth(token)
        if user:
            return Response({'message': 'Google login successful', 'user': user.username})
        return Response({'message': 'Google login failed'}, status=400)
