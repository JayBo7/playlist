from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/video/<str:query>/', views.search, name='search'),
    path('play/<str:video>/', views.player, name='player'),
]