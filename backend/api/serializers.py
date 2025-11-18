from rest_framework import serializers
from .models import Products, Categories, Customers, Orders, Suppliers, Orderdetails, Employees, Shippers

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = "__all__"

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = "__all__"

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = "__all__"

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = "__all__"

class SuppliersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suppliers
        fields = "__all__"

class EmployeersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = "__all__"

class ShipperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shippers
        fields = "__all__"
