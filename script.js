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
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
}