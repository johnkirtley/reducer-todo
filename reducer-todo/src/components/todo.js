import React, { useState } from 'react'


const ToDo = (props) => {
    const [currentTask, setCurrentTask] = useState('');

    const handleChanges = (e) => {
        setCurrentTask(e.target.value);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'CLEAR' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'ADD', payload: currentTask })
        setCurrentTask('');
    }
    return (
        <div>
            <form>
                <label htmlFor="task"></label>
                <input type="text" name="task" onChange={handleChanges} value={currentTask} placeholder='Enter task...' />
            </form>
            <button onClick={handleSubmit}>Add</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ToDo;