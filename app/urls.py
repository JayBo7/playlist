from django.urls import path, include, re_path
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', include('home.urls')),
    re_path('', TemplateView.as_view(template_name='index.html')),
]
