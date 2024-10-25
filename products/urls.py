
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', views.product_list, name='product_list'),
    ]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('products.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


