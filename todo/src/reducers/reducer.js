// import React from 'react';

export const initialState = {
    todos: [
        {item: 'Take dogs on a walk', completed: false, id: 1},
        {item: 'Take Catherine out for cheesecake and wine', completed: false, id: 2},
        {item: 'Get the fam Christmas gifts', completed: false, id: 3}
    ]
};

const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return { todos: [...state.todos, action.payload] };

        default:
            throw new Error('Action was not completed, hahahaha. Figure it out.');
    }
};

export default Reducer;