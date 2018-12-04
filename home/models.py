from django.contrib.postgres.fields import ArrayField,JSONField
from django.db import models
import uuid

# Create your models here.
class Playlist(models.Model):
	id = models.BigAutoField(primary_key=True, editable=False)
	videos = JSONField()