from django.conf.urls import url
from django.contrib import admin
from .views import home,predictor

urlpatterns = [
    url(r'^home/$',home),
    url(r'^$',predictor),
]
