//NEXT STEP: Get Clear All button to work

const addNewItem = document.querySelector('#new-li-button');
const todoList = document.querySelector('.todo-list')


function createNewListItem() {
  let itemContentInput = document.getElementById('add-new');
  const newListItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  const deleteButton = document.createElement('button');

  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.className = 'checkbox';
  deleteButton.className = 'delete-button';

  if (itemContentInput.value != '') {
    newListItem.textContent = itemContentInput.value;
  } else {
    return;
  }
  
  deleteButton.textContent = 'X';

  deleteButton.addEventListener('click', () => {
    newListItem.remove();
  })

  newListItem.prepend(newCheckbox);
  newListItem.prepend(deleteButton);
  todoList.appendChild(newListItem);
  itemContentInput.value = '';
}

const clearAllButton = document.getElementById('clear-all');
clearAllButton.addEventListener('click', () => {
  todoList.textContent = '';
})


const form = document.getElementById('new-todo');
form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    createNewListItem();
  }
})

addNewItem.addEventListener('click', () => {
  createNewListItem();
})