const counter = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };
        case 'INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state
    }
};

export default counter
