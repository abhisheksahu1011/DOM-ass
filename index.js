


const element1 = document.getElementsByTagName("h1");
console.log(element1);

const element2 = document.getElementById("tex");
console.log(element2);



const element = document.getElementsByClassName("text");
console.log(element[0].innerText);

element[0].innerText= "Have a fun in a party , color and style is change by js ";


element[0].style.color = "blue";


function changeText(){
    const element4 = document.getElementsByClassName("hi");
    element4[0].innerText = "Hellow world😊😊";
    console.log(element4);
}




