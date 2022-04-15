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
