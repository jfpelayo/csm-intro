from django.contrib import admin
from django.urls import path, include
from .api import clicker

# TODO: ADD YOUR TWO VIEWS

urlpatterns = [
    path('admin/', admin.site.urls),
    # TODO: Include your api urls here
    # path('api/', include('scheduler.api_urls')), # Example
    path('api/clicker', clicker)
]
