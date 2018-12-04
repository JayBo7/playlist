from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.clickjacking import xframe_options_exempt

from googleapiclient.discovery import build

from .ytkey import *


# Create your views here.

def index(request):
	return render(request, 'index.html')

@xframe_options_exempt
def search(request, query):
  client = build('youtube', 'v3', developerKey=api_key)
  videos = client.search().list(part='snippet', q=query, maxResults=50).execute()
  response = JsonResponse(videos)
  return response

@xframe_options_exempt
def player(request, video):
	videoUrl = "https://www.youtube.com/embed/%s" % video
	print(videoUrl)
	return render(request, 'video.html', {'video': videoUrl})	

