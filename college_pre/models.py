from django.db import models

# Create your models here.
class college(models.Model):
	name = models.CharField(max_length = 100)
	link = models.URLField()
	def __str__(self):
		return self.name

class category(models.Model):
	category = models.CharField(max_length = 10)
	def __str__(self):
		return self.category

class branch(models.Model):
	branch = models.CharField(max_length = 100)
	rank = models.IntegerField(default=0)
	category = models.ForeignKey(category, on_delete=models.CASCADE, default = 1)
	college = models.ForeignKey(college,on_delete = models.CASCADE)
	def __str__(self):
		return self.branch

