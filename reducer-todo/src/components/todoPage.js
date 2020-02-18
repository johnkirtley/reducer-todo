import React from 'react'


const ToDoPage = (props) => {

    const complete = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'COMPLETE', payload: e.target.id })
    }

    return (
        <div>
            {props.state.map(item => {
                return (
                    <p className={`${item.completed ? 'complete' : ''}`} id={item.id} onClick={complete}>{item.task}</p>
                )
            })}
        </div>
    )
}

export default ToDoPage;