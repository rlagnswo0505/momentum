const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDolist = document.querySelector('#todo-list');

function handleToDoSubmit(event) {
    event.preventDefault();
}

toDoForm.addEventListener('submit', handleToDoSubmit);
