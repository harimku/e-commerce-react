import * as ActionTypes from './ActionTypes';

export const Automotives = (state = {
                                    isLoading: true,
                                    errMess: null,
                                    automotives: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AUTOMOTIVES:
            return {...state, isLoading: false, errMess: null, automotives: action.payload};
        case ActionTypes.AUTOMOTIVES_LOADING:
            return {...state, isLoading: true, errMess: null, automotives: []};
        case ActionTypes.AUTOMOTIVES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};