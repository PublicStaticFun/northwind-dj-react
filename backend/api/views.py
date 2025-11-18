from django.http import JsonResponse
from django.apps import apps

def table_data(request, table_name):
    try:
        model = apps.get_model("api", table_name)
        data = list(model.objects.all().values())
        return JsonResponse(data, safe=False)
    except LookupError:
        return JsonResponse({"error": f"Table '{table_name}' not found"}, status=404)
