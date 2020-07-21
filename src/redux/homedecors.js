import * as ActionTypes from './ActionTypes';

export const Homedecors = (state = {
                                    isLoading: true,
                                    errMess: null,
                                    homedecors: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DECORS:
            return {...state, isLoading: false, errMess: null, homedecors: action.payload};
        case ActionTypes.DECORS_LOADING:
            return {...state, isLoading: true, errMess: null, homedecors: []};
        case ActionTypes.DECORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};