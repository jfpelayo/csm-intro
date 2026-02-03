from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # TODO: Include your api urls here
    # path('api/', include('scheduler.api_urls')), # Example
]
