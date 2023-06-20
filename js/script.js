function makeGreen (){
    document.body.style.backgroundColor = "green";
}

//On-click event in js
const blueButton = document.getElementById("blue-btn");

blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

//On-click event with anonymous function
const whiteButton = document.getElementById("white-btn");

whiteButton.onclick = function (){
    document.body.style.backgroundColor = "white";
}

//Event listner in action
const purpuleButton = document.getElementById("purple-btn");

purpuleButton.addEventListener("click", makePurple);

function makePurple (){
    document.body.style.backgroundColor = "purple";
}

//Event listner once again and anonymous function in action
const cyanButton = document.getElementById("cyan-btn");
cyanButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "cyan";
})

//Everything everywhere all at once in action ;p
document.getElementById("indigo-btn").addEventListener("click",function(){
    document.body.style.backgroundColor = "indigo";
})