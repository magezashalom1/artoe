from django.contrib import admin
from django.urls import path, include
from homepage.views import homepage  # Import the homepage view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name='home'),  # Home points to the homepage view
    path('products/', include('products.urls')),  # Include the products app URLs
] 




