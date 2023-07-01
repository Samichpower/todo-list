//NEXT STEP: Do proper formatting for the list items. Remove checkbox/X. Add trash can to right side, click the element to 'check' it off. Let's start with the checkbox.

const addNewItem = document.querySelector('#new-li-button');
const todoList = document.querySelector('.todo-list')



function createNewListItem() {
  let itemContentInput = document.getElementById('add-new');
  const newListItem = document.createElement('li');
  const deleteButton = document.createElement('button');

  newListItem.addEventListener('click', () => {
    newListItem.classList.toggle('completed');
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

  newListItem.prepend(deleteButton);
  todoList.appendChild(newListItem);
  itemContentInput.value = '';
}



const clearAllButton = document.getElementById('clear-all');
clearAllButton.addEventListener('click', () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
})


const form = document.getElementById('new-todo');
form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    createNewListItem();
  }
})

addNewItem.addEventListener('click', createNewListItem);