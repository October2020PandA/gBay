from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = '__all__'
        fields = 'first_name', 'last_name', 'user_name', 'email', 'password',

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        # fields = '__all__'
        fields = 'name', 'desc', 'atype', 'price', 'quantity', 'rating', 'sold', 'id', 'image',
