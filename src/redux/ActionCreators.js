import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        name: item.name
    }
});

export const fetchHomepages = () => dispatch => {

    dispatch(homepagesLoading());

    return fetch(baseUrl + 'homepages')
    .then(response => response.json())
    .then(homepages => dispatch(addHomepages(homepages)));
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


export const fetchHomedecors = () => dispatch => {

    dispatch(decorsLoading());

    return fetch(baseUrl + 'homedecors')
        .then(response => response.json())
        .then(homedecors => dispatch(addDecors(homedecors)));
};

export const addDecors = homepages => ({
    type: ActionTypes.ADD_DECORS,
    payload: homepages
});

export const decorsLoading = () => ({
    type: ActionTypes.DECORS_LOADING
});

export const decorsFailed = errMess => ({
    type: ActionTypes.DECORS_FAILED,
    payload: errMess
});

export const fetchAutomotives = () => dispatch => {

    dispatch(automotivesLoading());

    return fetch(baseUrl + 'automotives')
        .then(response => response.json())
        .then(automotives => dispatch(addAutomotives(automotives)));
};

export const addAutomotives = automotives => ({
    type: ActionTypes.ADD_AUTOMOTIVES,
    payload: automotives
});

export const automotivesLoading = () => ({
    type: ActionTypes.AUTOMOTIVES_LOADING
});

export const automotivesFailed = errMess => ({
    type: ActionTypes.AUTOMOTIVES_FAILED,
    payload: errMess
});

export const fetchElectronics = () => dispatch => {

    dispatch(electronicsLoading());

    return fetch(baseUrl + 'electronics')
        .then(response => response.json())
        .then(electronics => dispatch(addElectronics(electronics)));
};

export const addElectronics = electronics => ({
    type: ActionTypes.ADD_ELECTRONICS,
    payload: electronics
});

export const electronicsLoading = () => ({
    type: ActionTypes.ELECTRONICS_LOADING
});

export const electronicsFailed = errMess => ({
    type: ActionTypes.ELECTRONICS_FAILED,
    payload: errMess
});

export const fetchFashions = () => dispatch => {

    dispatch(fashionsLoading());

    return fetch(baseUrl + 'fashions')
        .then(response => response.json())
        .then(fashions => dispatch(addFashions(fashions)));
};

export const addFashions = fashions => ({
    type: ActionTypes.ADD_FASHIONS,
    payload: fashions
});

export const fashionsLoading = () => ({
    type: ActionTypes.FASHIONS_LOADING
});

export const fashionsFailed = errMess => ({
    type: ActionTypes.FASHIONS_FAILED,
    payload: errMess
});

export const fetchOutdoors = () => dispatch => {

    dispatch(outdoorsLoading());

    return fetch(baseUrl + 'outdoors')
        .then(response => response.json())
        .then(outdoors => dispatch(addOutdoors(outdoors)));
};

export const addOutdoors = outdoors => ({
    type: ActionTypes.ADD_OUTDOORS,
    payload: outdoors
});

export const outdoorsLoading = () => ({
    type: ActionTypes.OUTDOORS_LOADING
});

export const outdoorsFailed = errMess => ({
    type: ActionTypes.OUTDOORS_FAILED,
    payload: errMess
});

export const fetchPets = () => dispatch => {

    dispatch(petsLoading());

    return fetch(baseUrl + 'pets')
        .then(response => response.json())
        .then(pets => dispatch(addPets(pets)));
};

export const addPets = pets => ({
    type: ActionTypes.ADD_PETS,
    payload: pets
});

export const petsLoading = () => ({
    type: ActionTypes.PETS_LOADING
});

export const petsFailed = errMess => ({
    type: ActionTypes.PETS_FAILED,
    payload: errMess
});