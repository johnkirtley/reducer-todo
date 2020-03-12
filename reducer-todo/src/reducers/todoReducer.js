
export const initialState = [
    {
        id: Date.now(),
        task: '',
        completed: false
    }
]

export const ReducerList = (state, action) => {

    switch (action.type) {
        case 'ADD': {
            return [...state, { task: action.payload, completed: false, id: Date.now() }]
        };
        case 'COMPLETE': {
            let current = state.find(task => task.id === Number(action.payload));
            let index = state.indexOf(current);
            let newState = [...state];
            newState[index].completed = !newState[index].completed;
            return newState;
        };
        case 'CLEAR': {
            let newState = [...state]
            let filter = newState.filter(task => {
                return task.completed === false
            })
            return filter;
        }
        default: {
            return state;
        }
    }
}
