let myTodos = [];
const inputEl = document.querySelector('.input-el');
const todoBtn = document.querySelector('.todo-btn');
// const themeBtn = document.querySelector('.theme-btn');
const deleteBtn = document.querySelector('.delete-btn');
const todoTxt = document.querySelector('.todo');
const bodyEl = document.querySelector('#body');
const setLocalStorage = JSON.parse(localStorage.getItem('myTodos'));

if (setLocalStorage) {
  myTodos = setLocalStorage;
  render(myTodos);
}

// localStorage.setItem('myTodos', )
function render(todos) {
  let listItems = "";
  for (let i = 0; i < todos.length; i++) {
    listItems += `<li>${todos[i]}</li>`;
  }

  todoTxt.innerHTML = listItems;
}

todoBtn.addEventListener('click', () => {
  if (inputEl.value === '') {
    // inputEl.placeholder.style.color = 'white'
    inputEl.placeholder = "Feed the text box 😒";
  } else {
    myTodos.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem('myTodos', JSON.stringify(myTodos))
    render(myTodos);
  }
  // inputEl.style.color = 'white';
})

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear();
  myTodos = [];
  render(myTodos);
  inputEl.placeholder = 'Your todos have been cleared 😀'
})

