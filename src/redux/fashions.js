import * as ActionTypes from './ActionTypes';

export const Fashions = (state = {
                                    isLoading: true,
                                    errMess: null,
                                    fashions: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FASHIONS:
            return {...state, isLoading: false, errMess: null, fashions: action.payload};
        case ActionTypes.FASHIONS_LOADING:
            return {...state, isLoading: true, errMess: null, fashions: []};
        case ActionTypes.FASHIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};