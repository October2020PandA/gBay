from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('product-list/' , views.product_list, name="product-list"),
    # path('user-create/', views.user_create, name="user-create"),
    # path('product-detail/<int:id>' , views.product_detail, name="product-detail"),
    # path('product-create/' , views.product_create, name="product-create"), // I added this - Ramiro
    # path('product-update/<int:id>' , views.product_update, name="product-update"),
    # path('product-delete/<int:id>' , views.product_delete, name="product-delete"),
]