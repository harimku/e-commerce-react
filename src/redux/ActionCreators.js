import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = (item) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: item
});

/*
export const removeItem = (name) => dispatch => {

    return fetch(baseUrl + 'cartitems', {
            method: "DELETE"
        })

        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(name => dispatch(deleteItem(name)))
        .catch(error => {
            console.log('Remove Item from Cart', error.message);
            alert('Your item could not be removed. \nError: ' + error.message);
        });
};
*/

export const postItem = (name, image, price) => dispatch => {
    
    const newItem = {
        name,
        image,
        price
    };

    return fetch(baseUrl + 'cartitems', {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addItem(response)))
        .catch(error => {
            console.log('Add Item to Cart', error.message);
            alert('Your item could not be added to cart\nError: ' + error.message);
        });
};

export const fetchHomepages = () => dispatch => {

    dispatch(homepagesLoading());

    return fetch(baseUrl + 'homepages')
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(homepages => dispatch(addHomepages(homepages)))
    .catch(error => dispatch(homepagesFailed(error.message)));
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
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(homedecors => dispatch(addDecors(homedecors)))
    .catch(error => dispatch(decorsFailed(error.message)));
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
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(automotives => dispatch(addAutomotives(automotives)))
    .catch(error => dispatch(automotivesFailed(error.message)));
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
    
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(electronics => dispatch(addElectronics(electronics)))
    .catch(error => dispatch(electronicsFailed(error.message)));
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
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(fashions => dispatch(addFashions(fashions)))
    .catch(error => dispatch(fashionsFailed(error.message)));
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
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(outdoors => dispatch(addOutdoors(outdoors)))
    .catch(error => dispatch(outdoorsFailed(error.message)));
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
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);                
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(pets => dispatch(addPets(pets)))
    .catch(error => dispatch(petsFailed(error.message)));
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

export const fetchCartitems = () => dispatch => {

    return fetch(baseUrl + 'cartitems')
        .then(response => response.json())
        .then(cartitems => dispatch(addCartitems(cartitems)));
};

export const addCartitems = cartitems => ({
    type: ActionTypes.ADD_CARTITEMS,
    payload: cartitems
});

export const cartitemsLoading = () => ({
    type: ActionTypes.CARTITEMS_LOADING
});

export const cartitemsFailed = errMess => ({
    type: ActionTypes.CARTITEMS_FAILED,
    payload: errMess
});


