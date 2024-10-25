from django.shortcuts import render, get_object_or_404
from .models import Sneaker
from django.views.generic import ListView

# Class-based view for listing sneakers
class SneakerListView(ListView):
    model = Sneaker
    template_name = 'products/sneaker_list.html'  # Correct path
    context_object_name = 'sneakers'  # This will be the variable in the template

# Function-based view for sneaker details
def sneaker_detail(request, pk):
    sneaker = get_object_or_404(Sneaker, pk=pk)
    return render(request, 'products/sneaker_detail.html', {'sneaker': sneaker})