import * as ActionTypes from './ActionTypes';

export const Items = (state = {
                                isLoading: true,
                                errMess: null,
                                cartitems: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            const item = { id: state.cartitems.length, ...action.payload };
            const cartitems = [...state.cartitems, item];
            return { ...state, errMess: null, cartitems }
        case ActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartitems: state.cartitems.filter((item) => item.name !== action.payload)
            };
            
        case ActionTypes.ADD_CARTITEMS:
            return {...state, isLoading: false, errMess: null, cartitems: action.payload};
        case ActionTypes.CARTITEMS_LOADING:
            return {...state, isLoading: true, errMess: null, cartitems: []};
        case ActionTypes.CARTITEMS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};