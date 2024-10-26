from django.contrib import admin
from .models import Sneaker, Order, OrderItem

@admin.register(Sneaker)
class SneakerAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'size')             # Display essential details of each sneaker
    search_fields = ('name', 'short_description')        # Search by name or description
    list_filter = ('size',)                              # Filter sneakers by size
    readonly_fields = ('main_image', 'other_images')     # Make image fields read-only in the admin

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'status', 'created_at', 'updated_at')  # Key details for each order
    list_filter = ('status', 'created_at')             # Filter by status and order creation date
    search_fields = ('customer_name', 'customer_email')  # Search by customer details
    readonly_fields = ('created_at', 'updated_at')     # Creation and update timestamps are read-only
    inlines = []  # We’ll add OrderItemInline for order details

    def get_ordered_items(self, obj):
        # Display each item and its quantity within the order
        return ", ".join([f"{item.sneaker.name} ({item.quantity})" for item in obj.orderitem_set.all()])
    get_ordered_items.short_description = 'Ordered Items'

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1  # Allows adding a new OrderItem inline

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'sneaker', 'quantity', 'price')  # Show item details for each order
    list_filter = ('sneaker',)                                # Filter items by sneaker type
    search_fields = ('order__customer_name', 'sneaker__name') # Search by order customer or sneaker name
    readonly_fields = ('price',)                              # Price is fixed at order time
