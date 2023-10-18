import { pintar, filterAllBrands } from './dataFunctions.js';
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
const ordenar = document.getElementById("ord");
ordenar.addEventListener("click", () => {
    const sortedData = orderByAlphabetical(data, item => item.name);
    renderItems(sortedData); // Volver a renderizar con los datos ordenados
})