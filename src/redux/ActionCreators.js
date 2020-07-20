import * as ActionTypes from './ActionTypes';

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        name: item.name
    }
});