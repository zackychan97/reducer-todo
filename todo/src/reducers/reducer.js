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


//Step 1A -- In a folder called reducers add a reducer file and build out a simple reducer with just a default return for now 
const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return { todos: [...state.todos, action.payload] };

        default:
            throw new Error('Action was not completed, hahahaha. Figure it out.');
    }
};

//Step 1C -- Export both the reducer and the initial state object
export default Reducer;