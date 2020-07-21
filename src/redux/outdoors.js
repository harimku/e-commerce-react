import * as ActionTypes from './ActionTypes';

export const Outdoors = (state = {
                                isLoading: true,
                                errMess: null,
                                outdoors: []
                            }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OUTDOORS:
            return {...state, isLoading: false, errMess: null, outdoors: action.payload};
        case ActionTypes.OUTDOORS_LOADING:
            return {...state, isLoading: true, errMess: null, outdoors: []};
        case ActionTypes.OUTDOORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};