from django.shortcuts import render
from django.template import RequestContext
from django.shortcuts import redirect, get_object_or_404,Http404
from django.db.models import F
from django.http import HttpResponse,JsonResponse
import uuid
from rest_framework.generics import RetrieveAPIView,ListAPIView,CreateAPIView
from django import forms
from .models import college,branch,category
from django.contrib.auth.decorators import login_required
#from .serializers import LinkSerializer
 
# Create your views here.
def home(request):
	err,blank='',''
	if request.method == 'POST':
		a = college()
		a.name = request.POST.get('name')
		a.link = request.POST.get('link')
		a.save()
		branches,marks = [],[]
		j,k=0,0
		branches = request.POST.getlist('branch[]')
		ranks = request.POST.getlist('rank[]')
		categorys = request.POST.getlist('category[]')
		for i in branches:
			categorya = category.objects.get(category = categorys[j])
			a.branch_set.create(branch = i,rank=ranks[j],category = categorya)
			j+=1
			a.save()			
		err = 'Successful'
	else:
		pass

	return render(request,'index.html',{'err':err,})


def predictor(request):
	err,k='',[]
	if request.method=='POST':
		rank = request.POST['rank']
		categorys = request.POST['category']
		categorys = str(categorys)
		categoryq=category.objects.get(category=categorys)
		k=branch.objects.filter(category=categoryq ,rank__gte=rank).order_by('rank')
		err = 'Success!'
	else:
		pass
	return render(request,'predict.html',{'branche':k,'err':err})
