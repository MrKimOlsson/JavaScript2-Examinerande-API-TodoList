  // _______________________________________________________FETCH - PATCH - To change status ________________________________________________________
const changeStatus = e => {

    // Relevant todo data
    todoData = e;

    // Fetch url
    idUrl = BASE_URL + todoData.id

    // Info to change status ID
    let changeStatus = {
    completed: !todoData.completed
    }

    // Options for fetch method
    let statusOptions = {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(changeStatus)
    }
    
    // Try to Fetch
    try{
        fetch(idUrl, statusOptions)

        .then(res => res.json())
        .then(data => {
            console.log(data)
            todoData.completed = data.completed
            listTodos();
        }) 
    }
    // Catch error - output error message
    catch(err) {
    console.log(err);
    output.innerHTML += `
        <div class="card">
            <h3>${err}</h3>
        </div>
        `
    } 
}