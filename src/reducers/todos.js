const todos = (state = {todos: []}, action) => {
    switch(action.type) {
        case "ADD":
           var arr = [... state.todos];
           arr.push(action.todo);
           return {...state, todos: arr};

        case "DELETE":
            var arr = [... state.todos];
            arr.splice(action.index, 1);
            return {...state, todos: arr};
        default: 
           return state;
    }
}

export default todos;