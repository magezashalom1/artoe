from rest_framework import serializers
from .models import Sneaker  # Adjust the import based on your model location

class SneakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sneaker
        fields = '__all__'  


