// import action variables

const initialState = {
    friends: [],
    error: '',
    pending: false
}

export const friendsList = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_FRIENDS_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'GET_FRIENDS_SUCCESS':
            return {
                ...state,
                pending: false,
                friends: action.payload
            }
        case 'GET_FRIENDS_FAIL':
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        default:
            return state;
    }
}