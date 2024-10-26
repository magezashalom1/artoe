from rest_framework import serializers
from .models import Sneaker, Order, OrderItem

class SneakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sneaker
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    sneaker = SneakerSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['sneaker', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(source='orderitem_set', many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'customer_name', 'customer_email', 'address', 'status', 'created_at', 'updated_at', 'items']
