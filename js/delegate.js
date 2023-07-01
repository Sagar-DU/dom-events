const items = document.getElementsByClassName("item");

// Easy way 
// for (const item of items){
//     item.addEventListener("click", function(){
//         document.getElementById("item-container").removeChild(item);
//     })
// }

// Fun way 
for (const item of items){
    item.addEventListener("click", function(event){
        event.target.parentNode.removeChild(event.target);
    })
}