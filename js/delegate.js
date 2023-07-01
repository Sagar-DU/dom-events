const items = document.getElementsByClassName("item");

for (const item of items){
    item.addEventListener("click", function(){
        document.getElementById("item-container").removeChild(item);
    })
}