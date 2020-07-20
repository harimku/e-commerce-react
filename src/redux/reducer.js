import { HOMEPAGES } from '../shared/homepages';
import { HOMEDECORS } from '../shared/homedecors';
import { AUTOMOTIVES } from '../shared/automotives';

export const initialState = {
    homepages: HOMEPAGES,
    homedecors: HOMEDECORS,
    automotives: AUTOMOTIVES,

};

export const Reducer = (state = initialState, action) => {
    return state;
};