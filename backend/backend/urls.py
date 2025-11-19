from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"status": "OK", "message": "Northwind API running"})

urlpatterns = [
    path("", home),
    path("api/", include("api.urls")),
]