const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

eventListeners();
function eventListeners(){
    form.addEventListener("submit", addTodo); //Submit olayı tetiklendiğinde addTodo fonksiyonunu çalıştır.

}
function addTodo(e){
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    
}
function addTodoToUI(newTodo){
    const listItem = document.createElement("li");

    if(newTodo === ""){
        alertFunc("danger","Lütfen bir todo girin!");
    }
    else{
        alertFunc("success","Todo başarıyla eklendi.")
        listItem.className = "list-group-item d-flex justify-content-between";

        const link = document.createElement("a");

        link.href = "#";
        link.className = "delete-item";
        link.innerHTML = "<i class = 'fa fa-remove'></i>";

        listItem.appendChild(document.createTextNode(newTodo));

        listItem.appendChild(link);
        
        todoList.appendChild(listItem);
    }
    
}
function alertFunc(type,message){
    /*<div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
    </div>*/
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1500)
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
function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    
    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}
