//FIRST STEP: Get the input text as the list item

const addNewItem = document.querySelector('#new-li-button');
const todoList = document.querySelector('.todo-list')

addNewItem.addEventListener('click', () => {
  let itemContent = document.getElementById('add-new');
  const newListItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  const deleteButton = document.createElement('button');

  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.className = 'checkbox';
  deleteButton.className = 'delete-button';

  if (itemContent.value != '') {
    newListItem.textContent = itemContent.value;
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
  itemContent.value = '';
})