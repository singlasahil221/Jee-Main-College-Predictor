from django.contrib import admin
from .models import college, category , branch
# Register your models here.
admin.site.register(college)
admin.site.register(branch)
admin.site.register(category)