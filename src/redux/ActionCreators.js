import * as ActionTypes from './ActionTypes';
import { HOMEPAGES } from '../shared/homepages';

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        name: item.name
    }
});

export const fetchHomepages = () => dispatch => {

    dispatch(homepagesLoading());

    setTimeout(() => {
        dispatch(addHomepages(HOMEPAGES));
    }, 2000);
};

export const addHomepages = homepages => ({
    type: ActionTypes.ADD_HOMEPAGES,
    payload: homepages
});

export const homepagesLoading = () => ({
    type: ActionTypes.HOMEPAGES_LOADING
});

export const homepagesFailed = errMess => ({
    type: ActionTypes.HOMEPAGES_FAILED,
    payload: errMess
});

