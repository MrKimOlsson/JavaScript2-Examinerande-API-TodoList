// _____________________________________________________CREATE TODO LIST__________________________________________________________

const listTodos = () => {
    todoList.innerHTML = ''

    todos.forEach(todo => {
    
      const todoElement = createTodoElement(todo)
      todoList.prepend(todoElement)
      // todoList.appendChild(todoElement)
    })
}

// _______________________________________________________CREATE ELEMENTS________________________________________________________
// Create elements to display todo list
const createTodoElement = (todoData) => {

    // Todo div card
    let todo = document.createElement('div')
    todo.id = todoData.id
    todo.classList.add('todo')

    // Subject wrapper
    const subjectDiv = document.createElement('div')
    subjectDiv.classList.add('subjectDiv')
  
    // Create subject element
    let subject = document.createElement('p')
    subject.classList.add('todo_subject')
    subject.innerText = todoData.title

    // append children to parent elements
    subjectDiv.appendChild(subject)
    todo.appendChild(subjectDiv)
    
    // Button wrapper
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttonDiv')
    todo.appendChild(buttonDiv)

    // _______________________________________________________Status button________________________________________________________
    let statusButton = document.createElement('button');
    statusButton.classList.add('statusButton');
    statusButton.classList.add('button');
    statusButton.innerText = "";
    buttonDiv.appendChild(statusButton)

    // Change status - toggle done/not done
    statusButton.addEventListener('click', () => {

    // Continuation in status.js
    changeStatus(todoData);
    })

    // _______________________________________________________Depending on status________________________________________________________
    // Check if status is completed
    if(todoData.completed == true){

      todo.classList.add('completedTodo')
      statusButton.innerHTML = "&#x2713";
    }
    // If status is not completed
    else {
      statusButton.innerHTML = "";
    }

    // _______________________________________________________Delete button________________________________________________________
    // Create delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.classList.add('button');
    deleteButton.innerHTML = "&times;";
    buttonDiv.appendChild(deleteButton);

    // Delete button click
    deleteButton.addEventListener('click', () => {

        // Continuation in delete.js
        removeTodo(todoData);
        })

    return todo
}