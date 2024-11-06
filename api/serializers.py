from rest_framework import serializers
from .models import Sneaker, Order, OrderItem
from django.contrib.auth.models import User

class SneakerSerializer(serializers.ModelSerializer):
    # Use URLs for image fields to make them accessible via API responses
    main_image = serializers.ImageField()
    additional_image_1 = serializers.ImageField(required=False)
    additional_image_2 = serializers.ImageField(required=False)
    additional_image_3 = serializers.ImageField(required=False)
    additional_image_4 = serializers.ImageField(required=False)

    class Meta:
        model = Sneaker
        fields = [
            'id', 'name', 'short_description', 'long_description', 'price', 'size',
            'main_image', 'additional_image_1', 'additional_image_2', 'additional_image_3', 'additional_image_4'
        ]

class OrderItemSerializer(serializers.ModelSerializer):
    sneaker = SneakerSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['sneaker', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(source='orderitem_set', many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'customer_name', 'customer_email', 'address', 'status',
            'created_at', 'updated_at', 'items'
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
    

