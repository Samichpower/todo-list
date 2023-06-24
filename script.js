//On clicking the new item button, a prompt will appear asking what to add. Whatever the user inputs will appear as a list-item. Beside each list item is a checkbox and an X. When the X is clicked the item is deleted.

const addNewButton = document.querySelector('.add-new-li');
const todoList = document.querySelector('.todo-list')

addNewButton.addEventListener('click', () => {
  let itemContent = prompt("What do you want to add?");

  const newListItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.className = 'checkbox';

  newListItem.textContent = itemContent;

  newListItem.prepend(newCheckbox);
  todoList.appendChild(newListItem);
})