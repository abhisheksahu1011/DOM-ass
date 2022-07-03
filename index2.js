function changeText(){
    const element4 = document.getElementsByClassName("hellow");
    element4[0].innerText = "Hellow world";
    console.log(element4);
}


function changeText(){
    const element5 = document.getElementsByClassName("changes");
    element5[0].innerText = "Welcome to Elevation academy";
    console.log(element5);


    const element6 = document.getElementsByClassName("container");
    element6[0].style.flexDirection = "column";
}



function time(){
    var hrs = document.getElementById("hours");
    var minu = document.getElementById("minutes");
    var sec = document.getElementById("second");
    var am_pm = document.getElementById("ampm");

    var time = new Date();

    var hrs=time.getHours()
    var minu = time.getMinutes()
    var sec=time.getSeconds()
    var am_pm = "AM";
    if(hrs==0){
        hrs=12;
    }
if(hrs>12){
    hrs = hrs-12;
    am_pm = "PM";
}else{
    am_pm = "AM"
}
if(sec<10){
    sec = "0"+sec;
}

if(minu<10){
    minu = "0"+ minu;
}

if(hrs<10){
    hrs = "0"+ hrs;
}
if(hrs==0){
    hrs=12;
}
    hours.innerText = hrs;
    minutes.innerText = minu;
    second.innerText = sec;
    ampm.innerText = am_pm;

}time();
var onesecond = 1000;
setInterval(time,onesecond);




//create a dropdown for selecting time in morning like 2PM-3PM,3PM-4PM.print the item text selected.

let morning=document.getElementById('morning');
let morningText=morning.options[morning.selectedIndex].text;
let output=document.getElementById('output');
output.innerText=morningText;


//Create a form having name,email,phone no,birth year.
//add validations-phone no should start with 91,it should be 10 digits
//email should be domain prepbytes.com
//birth year should be>95

function formDetails(){

    var form=document.createElement("form");
    var full_name=document.createElement("input");
    document.write('<br>');
    full_name.setAttribute("type","text");
    full_name.setAttribute("name","full_name");
    full_name.setAttribute("placeholder","fullname");
    document.write('<br>');
    document.write('<br>');


    var email=document.createElement("input");
    document.write('<br>');
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbytes.com");
    document.write('<br>');
    document.write('<br>');
    
     var phoneno=document.createElement("input");
    document.write('<br>');
    phoneno.setAttribute("type","text");
    phoneno.setAttribute("name","phoneno");
    phoneno.setAttribute("placeholder","+91 - ");
    phoneno.setAttribute("maxlength","10");
    document.write('<br>');
    document.write('<br>');

    var year=document.createElement("input");
    document.write('<br>');
    year.setAttribute("type","date");
    year.setAttribute("name","year");
    year.setAttribute("placeholder","DD/MM/YYYY");
    year.setAttribute("min","1995-01-01");
    document.write('<br>');
    document.write('<br>');

    var submit=document.createElement("input");
    submit.setAttribute("type","submit");
   
    form.appendChild(full_name);
    document.write('<br>');

    form.appendChild(email);
    document.write('<br>');

    form.appendChild(phoneno);
    document.write('<br>');

    form.appendChild(year);
    document.write('<br>');
    
    form.appendChild(submit);
    document.write('<br>');

    document.getElementsByClassName("form")[0].appendChild(form);
    
}
formDetails();
