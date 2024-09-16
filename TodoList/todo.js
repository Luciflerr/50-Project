//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ //Tüm Event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);

}
function deleteTodo(e){
    //console.log(e.target); Nereye tıkladığımızı görmek için. 
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove(); //li yi silemk için önce i nin parentini alırız (a)'nın parenti ise li dir o yüzden 2 parent element yazarız.
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success", "Todo Başarıyla silindi...")
    }

}
function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deleteTodo){
            todos.splice(index,1); //Arraydan değeri silmek için splice kullanırız x e bastığımızda o değerden 1 tane silmek için
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);

    })

}

function addTodo(e){
    const newTodo = todoInput.value.trim();

    if (newTodo === ""){
        /*<div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>*/
        showAlert("danger","Lütfen bir todo girin...");
    }else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);

        showAlert("success","Todo başarıyla eklendi...")

    }




    e.preventDefault();
}

function getTodosFromStorage(){ // Storageden todoları alma
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

}

function showAlert(type,message){
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;
    
    firstCardBody.appendChild(alert); //oluşturduğumuz alert'i ilk card'ın altına ekler.

    //setTimeout 2 tane değer alır ilki function 2.si aldığı zaman yani 1000 demek 1 saniye demek

    setTimeout(function(){
        alert.remove();
    },2000);//aldığı saniye);



}

function addTodoToUI(newTodo){ //Stringlerin değerini list item olarak UI'ya ekleme
/*<li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
</li>*/
    //List item oluşturma
    const listItem = document.createElement("li");
    //Link Oluşturma
    const link = document.createElement("a");
    link.href = '#';
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listItem.className = "list-group-item d-flex justify-content-between";

    //text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo List'e list item ekleme

    todoList.appendChild(listItem);

    console.log(listItem);
}