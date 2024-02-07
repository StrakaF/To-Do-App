/* Constants */ 

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

/* Prevented event and called toDoList */ 
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
});

/* toDoList */
function toDoList () {
    let newTask = inputEl.value; //stored input value
    const liEl = document.createElement("li"); // created li element
    liEl.innerText = newTask; //stored input value inside created li element
    ulEl.appendChild(liEl); //appended completed li element
    inputEl.value =" "; //empty input after submit

    //Check button
    const checkBtnEl = document.createElement("div"); //created new div element
    checkBtnEl.innerHTML = `<i class="fas fa-check-square">`; //insert i element in that div
    liEl.appendChild(checkBtnEl); //append that div > i element 

    //Trash button
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fas fa-trash">`;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", function() {
        if ( !liEl.classList.contains("checked")) {
            liEl.classList.add("checked")
        } else {
            liEl.classList.remove("checked");
        }
    });
}