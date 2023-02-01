const form = document.querySelector('#form');

// FORM
const handleSubmit = e => {
  e.preventDefault()

  // Felhantering - Om input är tom
  if(textInput.value == ""){
    console.log("Text input empty - return error");
    formError.classList.remove('v-hidden');

  }
  else {
    formError.classList.add('v-hidden');

    const newTodo = {
      title: textInput.value,
      completed: false
    }
      
    try {
    
      fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:")
        console.log(data)
        data.id = crypto.randomUUID();
        todos.push(data)
        const todoElement = createTodoElement(data)
        todoList.appendChild(todoElement)
        console.log(todos)
        textInput.value = "";
        listTodos();
        
      });
    }
    catch(err) {
      console.log(err);
      output.innerHTML += `<div class="card"><h3>${err}</h3></div>`
    }   
  }
}

form.addEventListener('submit', handleSubmit) 