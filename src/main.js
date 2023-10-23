import {pintar, orderByAlphabetical, filterDataByBrand} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", () => {
  const selectedOrder = ordenar.value ;
  const sortedData = orderByAlphabetical(data, item => item.name, selectedOrder);
  zapatilla.innerHTML = renderItems(sortedData); // Volver a renderizar con los datos ordenados

// Evento para invocar la data ordenada
const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", () => {
  const sortedData = orderByAlphabetical(data, item => item.name);
  zapatilla.innerHTML = renderItems(sortedData); // Vuelve a renderizar con los datos ordenados
})

const zapatilla =  document.getElementById("zapatillas")
zapatilla.innerHTML = renderItems(data); 

// Evento para invocar la data filtrada
const filter = document.querySelector("select[name='brand']");
filter.addEventListener("change", () => {
  const selectedBrand = filter.value; // Obtener el valor seleccionado en el select
  const filteredData = filterDataByBrand(data, 'brand', selectedBrand); // Pasa el valor seleccionado como tercer argumento
  zapatilla.innerHTML = renderItems(filteredData);
})

// Evento para limpiar la data filtrada y ordenada


