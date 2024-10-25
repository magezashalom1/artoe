from django.db import models

class Sneaker(models.Model):
    name = models.CharField(max_length=255)
    short_description = models.TextField()
    long_description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    main_image = models.ImageField(upload_to='sneakers/main/')
    other_images = models.JSONField()  # To store other image URLs or paths (up to 4 images)
    size = models.CharField(max_length=10)  # You can adjust the max_length as necessary

    def __str__(self):
        return self.name
