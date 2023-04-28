const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = `❌`;
    /* list 삭제 버튼 클릭 시 */
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        // const li = event.composedPath()[1]; // 같은 내용
        toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
        saveToDos();
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// ==================================================

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
});

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}