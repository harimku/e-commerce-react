import * as ActionTypes from './ActionTypes';

export const Homepages = (state = {
                                    isLoading: true,
                                    errMess: null,
                                    homepages: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOMEPAGES:
            return {...state, isLoading: false, errMess: null, homepages: action.payload};
        case ActionTypes.HOMEPAGES_LOADING:
            return {...state, isLoading: true, errMess: null, homepages: []};
        case ActionTypes.HOMEPAGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};