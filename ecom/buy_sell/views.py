from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.views.generic import TemplateView
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import *
from django.core.files import File

@api_view(['GET'])
def index(request):
    # return render(request, "frontend/build/index.html")
    # return render(request, 'index.html')
    api_urls = {
        'List': '/product-list',
        'Detail View': '/product-detail/<int:id>',
        'Create': '/product-create',
        'Update': '/product-update/<int:id>',
        'Delete': '/product-delete/<int:id>'
    }
    # return Response("API BASE POINT", safe=False)
    return Response(api_urls)


# Added this piece of code - Ramiro
@api_view(['GET'])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def user_create(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, id):
    products = Product.objects.get(id=id)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def product_create(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['POST'])
def product_update(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def product_delete(request, id):
    product = Product.objects.get(id=id)
    product.delete()
    return Response("Item Successfully Deleted !!!")