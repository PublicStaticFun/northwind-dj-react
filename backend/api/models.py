# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Categories(models.Model):
    categoryid = models.AutoField(primary_key=True)
    categoryname = models.CharField(max_length=25, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'categories'


class Customers(models.Model):
    customerid = models.AutoField(primary_key=True)
    customername = models.CharField(max_length=50, blank=True, null=True)
    contactname = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    postalcode = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        db_table = 'customers'


class Employees(models.Model):
    employeeid = models.AutoField(primary_key=True)
    lastname = models.CharField(max_length=15, blank=True, null=True)
    firstname = models.CharField(max_length=15, blank=True, null=True)
    birthdate = models.DateTimeField(blank=True, null=True)
    photo = models.CharField(max_length=25, blank=True, null=True)
    notes = models.CharField(max_length=1024, blank=True, null=True)

    class Meta:
        db_table = 'employees'


class Orderdetails(models.Model):
    orderdetailid = models.AutoField(primary_key=True)
    orderid = models.ForeignKey('Orders', models.DO_NOTHING, db_column='orderid', blank=True, null=True)
    productid = models.ForeignKey('Products', models.DO_NOTHING, db_column='productid', blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'orderdetails'


class Orders(models.Model):
    orderid = models.AutoField(primary_key=True)
    customerid = models.ForeignKey(Customers, models.DO_NOTHING, db_column='customerid', blank=True, null=True)
    employeeid = models.ForeignKey(Employees, models.DO_NOTHING, db_column='employeeid', blank=True, null=True)
    orderdate = models.DateTimeField(blank=True, null=True)
    shipperid = models.ForeignKey('Shippers', models.DO_NOTHING, db_column='shipperid', blank=True, null=True)

    class Meta:
        db_table = 'orders'


class Products(models.Model):
    productid = models.AutoField(primary_key=True)
    productname = models.CharField(max_length=50, blank=True, null=True)
    supplierid = models.ForeignKey('Suppliers', models.DO_NOTHING, db_column='supplierid', blank=True, null=True)
    categoryid = models.ForeignKey(Categories, models.DO_NOTHING, db_column='categoryid', blank=True, null=True)
    unit = models.CharField(max_length=25, blank=True, null=True)
    price = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        db_table = 'products'


class Shippers(models.Model):
    shipperid = models.AutoField(primary_key=True)
    shippername = models.CharField(max_length=25, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        db_table = 'shippers'


class Suppliers(models.Model):
    supplierid = models.AutoField(primary_key=True)
    suppliername = models.CharField(max_length=50, blank=True, null=True)
    contactname = models.CharField(max_length=50, blank=True, null=True)
    address = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    postalcode = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=15, blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        db_table = 'suppliers'
