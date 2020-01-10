const initialState = {
    total: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEXT':
            return {...state, total: String(state.total + action.value)};
        case 'DELETE':
            return {...state, total: 0};
        case 'EQUAL':
            return {...state, total: eval(state.total)};
        default:
            return state;
    }
};

export default reducer;