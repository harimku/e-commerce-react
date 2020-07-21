import * as ActionTypes from './ActionTypes';

export const Electronics = (state = {
                                    isLoading: true,
                                    errMess: null,
                                    electronics: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ELECTRONICS:
            return {...state, isLoading: false, errMess: null, electronics: action.payload};
        case ActionTypes.ELECTRONICS_LOADING:
            return {...state, isLoading: true, errMess: null, electronics: []};
        case ActionTypes.ELECTRONICS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};