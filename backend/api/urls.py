from django.urls import path
from .views import table_data

urlpatterns = [
    path("<str:table_name>/", table_data), 
]
