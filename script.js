//On clicking the new item button, a prompt will appear asking what to add. Whatever the user inputs will appear as a list-item. Beside each list item is a checkbox and an X. When the X is clicked the item is deleted.

const addNewItem = document.querySelector('.add-new-li');
const todoList = document.querySelector('.todo-list')

addNewItem.addEventListener('click', () => {
  let itemContent = prompt("What do you want to add?");
  const newListItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  const deleteButton = document.createElement('button');

  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.className = 'checkbox';
  deleteButton.className = 'delete-button';

  newListItem.textContent = itemContent;
  deleteButton.textContent = 'X';

  deleteButton.addEventListener('click', () => {
    newListItem.remove();
  })

  newListItem.prepend(newCheckbox);
  newListItem.prepend(deleteButton);
  todoList.appendChild(newListItem);
})