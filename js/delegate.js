const items = document.getElementsByClassName("item");

// Easy way 
// for (const item of items){
//     item.addEventListener("click", function(){
//         document.getElementById("item-container").removeChild(item);
//     })
// }

// Fun way 
// for (const item of items){
//     item.addEventListener("click", function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
// }

//Adding new list item
document.getElementById("add-item").addEventListener("click", function(){
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText = "Notun Gunda!";
    const parent = document.getElementById("item-container");
    parent.appendChild(li);
})

// works for new item also 
document.getElementById("item-container").addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target);
})