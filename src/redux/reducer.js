import { HOMEPAGES } from '../shared/homepages';
import { HOMEDECORS } from '../shared/homedecors';
import { AUTOMOTIVES } from '../shared/automotives';
import { ELECTRONICS } from '../shared/electronics';
import { FASHIONS } from '../shared/fashions';
import { OUTDOORS } from '../shared/outdoors';
import { PETS } from '../shared/pets';
import { ITEMS } from '../shared/cartitems';

export const initialState = {
    homepages: HOMEPAGES,
    homedecors: HOMEDECORS,
    automotives: AUTOMOTIVES,
    electronics: ELECTRONICS,
    fashions: FASHIONS,
    outdoors: OUTDOORS,
    pets: PETS,
    cartitems: ITEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};