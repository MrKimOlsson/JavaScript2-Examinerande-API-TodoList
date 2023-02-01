// _________________________________________________________REMOVE TODO______________________________________________________
const removeTodo = e => {

  // Relevant todo data
  todo = e;

  if(todo.completed == false){
    console.log("Complete the task first")
    modalWrapper.classList.remove('d-none');
    document.querySelector('footer').classList.add('blur')
    btnCloseModal.addEventListener('click', e => {
      modalWrapper.classList.add('d-none');
      
    })
    return
  }

  let deleteUrl = BASE_URL + todo.id

  fetch(deleteUrl, {
    method: 'DELETE'
  })
  .then(res => {
    
    if(res.ok) {
      findIndex = todo.id
      const index = todos.findIndex(todo => todo.id == findIndex)
      todos.splice(index, 1)
      console.log(todos)
      listTodos();
    }
    else{
      console.log("Nått gick snett")
    }
  })
}
    