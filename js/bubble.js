// Li ar upor dewa hoise 
document.getElementById("second-item").addEventListener("click", function(event){
    console.log("Second item paisiiiiiii!!");
    // to stop bubble effect 
    event.stopImmediatePropagation();
})
document.getElementById("second-item").addEventListener("click", function(event){
    console.log("Second item paisiiiiiii!! Abar");
    // to stop bubble effect 
    // event.stopPropagation();
})
document.getElementById("second-item").addEventListener("click", function(event){
    console.log("Second item paisiiiiiii!! Abar Abar");
    // to stop bubble effect 
    // event.stopPropagation();
})

// ul ar upor dewa hoise 
document.getElementById("list-container").addEventListener("click", function(){
    console.log("Lists paisi!");
})

//section ar upor dewa hoise
document.getElementById("section-container").addEventListener("click", function(){
    console.log("Section re click korlam.")
})