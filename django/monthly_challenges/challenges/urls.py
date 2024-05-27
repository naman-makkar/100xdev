from django.urls import path
from . import views
urlpatterns = [
    path("<str:month>", views.index_by_number),
    path("<str:month>", views.index)
]
