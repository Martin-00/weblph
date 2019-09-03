let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/pollitos.jpg") {
        myImage.setAttribute ("src", "images/posada1.jpg");
    }else{
        myImage.setAttribute("src", "images/pollitos.jpg");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("¿Qué pollito eres?");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Los Pollos Hermanos \n  Saludos "+myName;
}
if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Los Pollos Hermanos \n  Saludos "+storedName;
}
myButton.onclick = function() {
    setUserName();
}