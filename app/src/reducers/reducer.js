// import actions
import {
    FETCH_DATA,
    UPDATE_BEACHES,
    SET_ERROR
} from '../actions/actions'

// export initial state
export const initialState = {
    beaches: [],
    isFetchingData: true,
    error: ''
}

// export reducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                beaches: []
            };
        case UPDATE_BEACHES: 
            return {
                ...state,
                beaches: action.payload,
                isFetchingData: false
            };
        case SET_ERROR: 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default: 
            return state;
            
    }
}