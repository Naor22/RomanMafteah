from django.db import models

class item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    length = models.IntegerField()
