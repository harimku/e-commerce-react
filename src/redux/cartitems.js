import { ITEMS } from '../shared/cartitems';
import * as ActionTypes from './ActionTypes';

export const Items = (state = ITEMS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            if (state.includes(action.payload)) {
                console.log('Item already added to Cart!');
            }
            
            return state.concat(action.payload);

        default:
            return state;
    }
};