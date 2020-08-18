import * as ActionTypes from './ActionTypes';

export const Items = (state = {
                                isLoading: true,
                                errMess: null,
                                cartitems: []
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            const item = { id: state.cartitems.length + 1, ...action.payload };
            const cartitems = [...state.cartitems, item];
            return { ...state, errMess: null, cartitems }
        case ActionTypes.DELETE_ITEM:
            const items = state.cartitems.filter(item => item.id !== action.payload);
            state.cartitems = items;
            return state;
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