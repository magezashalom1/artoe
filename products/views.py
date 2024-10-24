from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404
from .models import Sneaker

def sneaker_list(request):
    sneakers = Sneaker.objects.all()
    return render(request, 'products/sneaker_list.html', {'sneakers': sneakers})

def sneaker_detail(request, pk):
    sneaker = get_object_or_404(Sneaker, pk=pk)
    return render(request, 'products/sneaker_detail.html', {'sneaker': sneaker})