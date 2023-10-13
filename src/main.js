import { pintar } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//pintar (data)
renderItems(data)
const orderByAlphabetical = (data, getter, order = 'asc') => {
    data.sort((a, b) => {
        const first = getter(a);
        const second = getter(b);
        const compare = first.localeCompare(second);
        return order === 'asc' ? compare : -compare;
    });
    return data;
}

const tarjetas = data;  // Suponiendo que data es un array
const sortedTarjetas = orderByAlphabetical(tarjetas, card => card.name);
console.log(sortedTarjetas);
