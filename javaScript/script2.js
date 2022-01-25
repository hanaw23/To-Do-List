// Variabels 
const divlists = document.getElementsByClassName("toDoLists")[0];
const input = document.getElementById("addItem-list");

// Action Listener to Add new items 
input.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        addItem();
    }
})

// Make Function to add Item / new class
function addItem() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    // make input text submit to item
    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    

    // Make checkboard
    checkIcon.className = "fa-solid fa-circle-check";
    checkIcon.style.color = "rgb(107, 105, 101)";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

    // Make trash / delete item
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "rgb(107, 105, 101)";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    // Wrap the class and div

    divChild.appendChild(checkIcon);
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    divlists.appendChild(divParent);

    input.value = "";
}