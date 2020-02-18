import React, { useState, useReducer } from 'react'
import { ReducerList, initialState } from '../reducers/todoReducer';
import TodoPage from './todoPage';


const Form = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(ReducerList, initialState)

    const handleChanges = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD', payload: task })
    }

    const handleClear = (e) => {
        e.preventDefault();
        dispatch({ type: 'REMOVE', payload: task })
    }

    return (
        <div>
            <form>
                <label htmlFor="task"></label>
                <input type="text" name="task" id="task" placeholder="Enter Task..." onChange={handleChanges} value={task} />
                <button onClick={handleSubmit}>Add Task</button>
                <button onClick={handleClear}>Delete</button>
            </form>
            <TodoPage id={state.id} task={task} dispatch={dispatch} state={state} />
        </div>
    )
}

export default Form;