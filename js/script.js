function makeGreen (){
    document.body.style.backgroundColor = "green";
}

//On-click even in js
const blueButton = document.getElementById("blue-btn");

blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}