const todoform = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todolistUL = document.getElementById('todo-list');

let allTodos= getTodos();
updateTodoList();

todoform.addEventListener('submit', function(e){
    e.preventDefault();
    AddTodo();
})

function AddTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length>0){
        const todoObject={
            text: todoText,
            completed: false
        }
        allTodos.push(todoObject);

        updateTodoList();
        saveTodos();
        getTodos();
        todoInput.value="";
    }
}
function updateTodoList(){
    todolistUL.innerHTML ="";
    allTodos.forEach((todo, todoIndex)=>{
            todoItem=createTodoItem(todo, todoIndex);
            todolistUL.appendChild(todoItem);
    })

}

function createTodoItem(todo, todoIndex){
    const todoId ="todo-" + todoIndex;
    const todoLi = document.createElement('Li');
    const todoText = todo.text;
    todoLi.className = "todo";
    todoLi.innerHTML =`
                <input type="checkbox"  id="${todoId}">
                <label for="${todoId}" class="custom-checkbox">
                    <svg  fill="transparent"viewBox="0 0 24 24" width="24" height="24">
                        <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z"></path>
                    </svg>
                </label>
                <label for="${todoId}" class="todo-text">
                    ${todoText}
                </label>
                <button class="delete-button">
                    <svg  fill="#e3e3e3" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360Z" transform="scale(0.025) translate(0, 960)" />
                    </svg>
                </button> 
    `
    const deleteButton = todoLi.querySelector('.delete-button');
    deleteButton.addEventListener("click", function(){
        deleteTodoItem(todoIndex);
    })
    const checkbox = todoLi.querySelector('input');
    checkbox.addEventListener('change', function(){
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })
    checkbox.checked= todo.completed;
    return todoLi;
}
function deleteTodoItem(todoIndex){
allTodos=allTodos.filter((_, i)=> i!== todoIndex);
saveTodos();
updateTodoList();
}


function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(allTodos));
}
function getTodos(){
    const todos = localStorage.getItem("todos") || "[]";
    return JSON.parse(todos);
}
