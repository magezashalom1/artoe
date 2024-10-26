from django.db import models

class Sneaker(models.Model):
    name = models.CharField(max_length=255)
    short_description = models.TextField()
    long_description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    main_image = models.ImageField(upload_to='sneakers/main/')
    other_images = models.JSONField()  # Store additional image URLs or paths
    size = models.CharField(max_length=10)  # Size format for sneaker

    def __str__(self):
        return self.name

class Order(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Shipped', 'Shipped'),
        ('Delivered', 'Delivered'),
        ('Cancelled', 'Cancelled'),
    ]

    customer_name = models.CharField(max_length=255)
    customer_email = models.EmailField()
    address = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    sneakers = models.ManyToManyField(Sneaker, through='OrderItem')  # Link to Sneaker through OrderItem model

    def __str__(self):
        return f"Order {self.id} by {self.customer_name}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    sneaker = models.ForeignKey(Sneaker, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Snapshot of price at purchase time

    def __str__(self):
        return f"{self.quantity} x {self.sneaker.name}"
