from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/video/<str:query>/', views.search, name='search'),
    path('play/<str:video>/', views.player, name='player'),
    path('api/playlist/', views.playlist, name='playlist'),
    path('api/getlist/<int:num>/', views.getPlaylist, name='getPlaylist'),
    path('playvideos', views.playvideos, name='playvideos'),
]