
import { orderByAlphabetical,filterDataByBrand, filterByModelYear,filterFactsByColor} from './dataFunctions.js';

import { renderItems } from './view.js';
import data from './data/dataset.js';

// Evento recibe la data y la muestra en HTML

const contenedorDeZapatillas = document.getElementById("root");
const todasLasZapatillas = data;
const campoContadorDeModelos=document.getElementById('dato')
const htmlDeTodasLasZapatillas = renderItems(todasLasZapatillas);
contenedorDeZapatillas.innerHTML = htmlDeTodasLasZapatillas;
campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ data.length;


// Evento para Ordenar la data por modelo

const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", (evento) => {
  const selectedOrder = evento.currentTarget.value;
  const sortedData = orderByAlphabetical(data, item => item.name, selectedOrder);
  contenedorDeZapatillas.innerHTML = renderItems(sortedData);
});

// Evento para limpiar los filtros

const limpiar = document.getElementById('button-clear');
limpiar.addEventListener("click", () => {
  ordenar.value= "todos";
  filtroColores.value= "allcolors";
  filter.value="allbrands";
  filterYear.value="Seleccione un año";
  campoContadorDeModelos.innerHTML = "cantidad de modelos: "+ data.length;
  contenedorDeZapatillas.innerHTML = renderItems(data); 
});

// Evento para invocar la data filtrada por Marca

const filter = document.querySelector("select[name='brand']");
filter.addEventListener("change", (evento) => {
  const selectedBrand =  evento.currentTarget.value 
  const filteredData = filterDataByBrand(data, 'brand', selectedBrand); // Pasa el valor seleccionado como tercer argumento
  contenedorDeZapatillas.innerHTML = renderItems(filteredData); 
});
// Evento para invocar la data filtrada por Color

const filtroColores = document.querySelector("select[name='color']");
filtroColores.addEventListener("change", (evento) => {
  const selectedColor =  evento.currentTarget.value 
  const ColorFiltrado = filterFactsByColor(data, selectedColor); // Pasa el valor seleccionado como tercer argumento
  contenedorDeZapatillas.innerHTML = renderItems(ColorFiltrado); 
});

//imprimir en pantalla los reportes estadistico
//me falta ponerle una condicional para que genere un reporte estadistico cuanto seleccionen un año
//filtro por año
const filterYear=document.getElementById ('yearinput')


filterYear.addEventListener("change", (evento) => {
  const year = evento.target.value;
  const filteredByYear = filterByModelYear(data,year);  
  contenedorDeZapatillas.innerHTML = renderItems(filteredByYear); 
  campoContadorDeModelos.innerHTML= "En este año se produjeron:" + filteredByYear.length +" "+ "modelos.";

});






