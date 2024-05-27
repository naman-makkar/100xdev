from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
# Create your views here.

months_dict = {

    "january" : "Sleep 24 hours",
    "february" : "Eat 24 hours",
    "march" : "code for 24 hours",
    "april" : "Sleep 24 hours",
    "may" : "Eat 24 hours",
    "june" : "Sleep 24 hours",
    "july" : "no food for 24 hours",
    "august" : "Eat 24 hours",
    "september" : "Sleep 24 hours",
    "october" : "no food for 24 hours",
    "november" : "Eat 24 hours",
    "december" : "no food for 24 hours"

}

def index_by_number(request, month):
        
        months = list(months_dict.keys())
        redirect_month = months[month-1]
        if month>len(months):
             return HttpResponse("invalid month")
        else:
             return HttpResponseRedirect("/challenges/" + redirect_month)


def index(request, month):
    try:
        text = months_dict[month]
        return HttpResponse(text)
    except:
        return HttpResponseNotFound("month not exist")