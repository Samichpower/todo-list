//On clicking the new item button, a prompt will appear asking what to add. Whatever the user inputs will appear as a list-item. Beside each list item is a checkbox and an X. When the X is clicked the item is deleted.

//PLAN: Finish the UI, then create a seperate branch to make the code for it.

const addNewItem = document.querySelector('.new-li-button');
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