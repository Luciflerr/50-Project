const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodos);
    secondCardBody.addEventListener("click",deleteTodo);

}
function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        displayMessage("success","Todo Başarıyla Silindi.")
    }
}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodos(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })

}
function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
        displayMessage("danger","Lütfen bir todo ekleyin.")
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);

        displayMessage("success","Todo başarıyla eklendi.");
        todoInput.value = "";
    }
    
    e.preventDefault();
}
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    
    
    todoList.appendChild(listItem);
}
function displayMessage(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    
    setTimeout(function(){
        alert.remove();
    },1500)
}
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    
    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}
function getTodosFromStorage(){
    let todos;
    
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}




