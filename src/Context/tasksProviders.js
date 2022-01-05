import React from 'react';
import { createContext, useReducer } from 'react';
import shortid from "shortid";


import tasksReducer from './tasksReducer';

const initialState = {
    tasks: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: {...task, id: shortid.generate()}
        })
    }

    function getTask(id) {
        dispatch({
            type: 'GET_TASK',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks, 
            addTask,
            getTask
        }}>
            {children}
        </GlobalContext.Provider>
    )
}