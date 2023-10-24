import { orderByAlphabetical,filterDataByBrand} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const contenedorDeZapatillas = document.getElementById("root");
const todasLasZapatillas = data;
const htmlDeTodasLasZapatillas = renderItems(todasLasZapatillas);
contenedorDeZapatillas.innerHTML = htmlDeTodasLasZapatillas;


// Evento para Ordenar la data por modelo

const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", (evento) => {
  
  const valorSeleccionado = evento.currentTarget.value;
  const selectedOrder = evento.currentTarget.value
  const sortedData = orderByAlphabetical(data, item => item.name, selectedOrder);
  contenedorDeZapatillas.innerHTML = renderItems(sortedData);
  console.log(valorSeleccionado);
});

// Evento para limpiar los filtros

const limpiar = document.getElementById('button-clear');
limpiar.addEventListener("click", () => {
  ordenar.value= "todos";
  filter.value="allbrands";
  contenedorDeZapatillas.innerHTML = renderItems(data); 
});

// Evento para invocar la data filtrada

const filter = document.querySelector("select[name='brand']");
filter.addEventListener("change", (evento) => {
  const selectedBrand =  evento.currentTarget.value 
  const filteredData = filterDataByBrand(data, 'brand', selectedBrand); // Pasa el valor seleccionado como tercer argumento
  contenedorDeZapatillas.innerHTML = renderItems(filteredData); 
});

