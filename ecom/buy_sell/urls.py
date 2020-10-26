from django.urls import path
from . import views
# from django.conf.urls.static import static
# from django.conf import settings
# from rest_framework import routers

urlpatterns = [
    path('', views.index),
    path('product-list/' , views.product_list, name="product-list"),
    path('user-list/' , views.user_list, name="user-list"),
    path('user-create/', views.user_create, name="user-create"),
    path('product-detail/<str:id>' , views.product_detail, name="product-detail"),
    path('product-create/' , views.product_create), 
    # , name="product-create"
    path('product-update/<str:id>' , views.product_update),
    path('product-delete/<str:id>' , views.product_delete),
] 