//FIRST STEP: Get the input text as the list item

const addNewItem = document.querySelector('#new-li-button');
const todoList = document.querySelector('.todo-list')
const form = document.getElementById('new-todo');


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


form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    createNewListItem();
  }
})

addNewItem.addEventListener('click', () => {
  createNewListItem();
})