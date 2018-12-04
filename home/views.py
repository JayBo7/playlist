from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt

from googleapiclient.discovery import build
from home.models import Playlist
import json

from .ytkey import *

# Create your views here.
def index(request):
	return render(request, 'index.html')

def playvideos(request):
	return render(request, 'playvideo.html')

@xframe_options_exempt
def search(request, query):
  client = build('youtube', 'v3', developerKey=api_key)
  videos = client.search().list(part='snippet', q=query, maxResults=50, type='video').execute()
  response = JsonResponse(videos)
  return response

@xframe_options_exempt
def player(request, video):
	videoUrl = "https://www.youtube.com/embed/%s" % video
	return render(request, 'video.html', {'video': videoUrl})	

@csrf_exempt
def playlist(request):
	values = json.dumps(request.POST.dict())
	print(values)
	newList = Playlist(videos=values)
	newList.save()
	newList.id
	return HttpResponse(newList.id)

def getPlaylist(request, num):
	videos = Playlist.objects.values_list().get(id = num)
	print(videos[0])
	return render(request, 'playlist.html', {'playlist': videos})




