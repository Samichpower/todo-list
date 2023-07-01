//NEXT STEP: Remove X and add red container to right side that appears on hover.

const addNewItem = document.querySelector('#new-li-button');
const todoList = document.querySelector('.todo-list')



function createNewListItem() {
  let itemContentInput = document.getElementById('add-new');
  const newListItem = document.createElement('li');
  const deleteButton = document.createElement('div');

  newListItem.classList.add('current-task');
  newListItem.addEventListener('click', () => {
    newListItem.classList.toggle('completed');
    getTotalPendingTasks();
  })

  if (itemContentInput.value != '') {
    newListItem.textContent = itemContentInput.value;
  } else {
    return;
  }

  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    newListItem.remove();
  })

  newListItem.appendChild(deleteButton);
  todoList.appendChild(newListItem);
  itemContentInput.value = '';
  getTotalPendingTasks();
}



function getTotalPendingTasks() {
  const pendingTaskDisplay = document.getElementById('pending-tasks');
  let completedTasks = document.querySelectorAll('.completed').length;
  let pendingTasks = document.querySelectorAll('.current-task').length - completedTasks;
  pendingTaskDisplay.textContent = pendingTasks;
}

const clearAllButton = document.getElementById('clear-all');
clearAllButton.addEventListener('click', () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
  getTotalPendingTasks();
})


const form = document.getElementById('new-todo');
form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    createNewListItem();
  }
})

addNewItem.addEventListener('click', createNewListItem);