import React from 'react';

//Step 2A -- Using the reducer hook, set up state in your component.
import Reducer, { initialState } from "../reducers/Reducer";

//Step 2B -- Now render your list of todos from your reducer in your app

const ToDoRenderer = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    
}