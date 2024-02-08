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
    inputEl.value = ""; //empty input after submit
    inputEl.placeholder = "Enter your task";

    //Check button
    const checkBtnEl = document.createElement("div"); //created new div element
    checkBtnEl.innerHTML = `<i class="fas fa-check-square">`; //insert i element in that div
    liEl.appendChild(checkBtnEl); //append that div > i element 

    //Trash button
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fas fa-trash">`;
    liEl.appendChild(trashBtnEl);

    //Checked function
    checkBtnEl.addEventListener("click", function() {
        if ( !liEl.classList.contains("checked")) {
            liEl.classList.add("checked")
        } else {
            liEl.classList.remove("checked");
        }
        updateLocalStorage();
    });

    //Removing function
    trashBtnEl.addEventListener("click", function() {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage () {
    const liEls = document.querySelectorAll("li"); //check all li elements and store in var
    let list = []; //var for li
    liEls.forEach( liEl => { //function triggered once for each element
        list.push({
            name: liEl.innerText, //name of task
            checked: liEl.classList.contains("checked") //true or false
        })
    });
    localStorage.setItem("list", JSON.stringify(list)); //setting list, converting to string
}