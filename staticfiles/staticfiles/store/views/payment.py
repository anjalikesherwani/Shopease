from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password, check_password
from store.models.customer import Customer
from django.views import View
from store.models.product import Product
from store.models.orders import Order


def payment_view(request):
    return render(request, 'payment.html')
