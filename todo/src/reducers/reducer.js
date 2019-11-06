// import React from 'react';


// Step 1B In the same file, build your initial state object that has a list of todos with the following shape:


//Step 1C -- Export both the reducer and the initial state object
export const initialState = {
    todos: [
        {item: 'Take dogs on a walk', completed: false, id: 1},
        {item: 'Take Catherine out for cheesecake and wine', completed: false, id: 2},
        {item: 'Get the fam Christmas gifts', completed: false, id: 3}
    ]
};

const Reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        const todo = {
          item: action.payload,
          completed: false,
          id: Date.now()
        };
  
        if (todo.item !== "") {
          return {
            ...state,
            todos: [...state.todos, todo]
          };
        } else {
          return state;
        }
  
      case "CLEAR_COMPLETED":
        return { todos: state.todos.filter(todo => !todo.completed) };
  
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          })
        };
  
      default:
        return state;
    }
  };
  
  export default Reducer;