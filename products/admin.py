from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Sneaker

@admin.register(Sneaker)
class SneakerAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', "description", 'created_at', 'updated_at')
    search_fields = ('name',)