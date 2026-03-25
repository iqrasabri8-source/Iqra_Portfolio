from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        subject=request.POST.get('subject')
        text=request.POST.get('text')
        print(name,email,subject,text)
        user=Contact(name=name, email=email, subject=subject, text=text)
        user.save()
    return render(request,"home.html")

def atm(request):
    return render(request,"atm.html")

def calculator(request):
    return render(request,"calculator.html")

def marksheet(request):
    final_output=''
    per=''
    div=""
    try:
        if request.method=="GET":
            English=int(request.GET['English'])
            Math=int(request.GET['Math'])
            Computer=int(request.GET['Computer'])
            Business=int(request.GET['Business'])
            Account=int(request.GET['Account'])
            final_output=English+Math+Computer+Business+Account
            
            print("Result=",final_output)
            per=final_output/500*100

            print("Percent=",per)
            
            if per>90:
                div="A+"
                print(div)
            elif per>80:
                div="A"
                print(div)
            elif per>70:
                div="B+"
                print(div)
            elif per>60:
                div="B"
                print(div)
            elif per>50:
                div="C"
                print(div)
            elif per>40:
                div="D"
                print(div)
            else:
                div="Fail"
                print(div)

    except:
        pass
    data={
        "c":final_output,
        "d":per,
        "e":div

    }
    return render (request,"marksheet.html",data)
