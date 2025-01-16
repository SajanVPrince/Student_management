from django.db import models

# Create your models here.
class Task(models.Model):
    roll_no=models.IntegerField()
    name=models.TextField()
    age=models.IntegerField()
    phone=models.IntegerField()
    email=models.EmailField()
