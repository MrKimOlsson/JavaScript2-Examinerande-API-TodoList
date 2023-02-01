   // FETCH TODOS
   // _______________________________________________________________________________________________________________
  const getTodo = async () => {
      const res = await fetch(PAGE_URL)
      const data = await res.json()
      
        data.forEach(todo => {
        todos.push(todo)
      })
  
      console.log("Todo list:")
      console.log(todos)
      todoList.innerHTML = '';
      listTodos()
    }
  
  getTodo();