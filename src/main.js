import { tipoDeZapatillas, orderByAlphabetical,filterDataByBrand} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const zapatillaDiv = document.createElement(data);
zapatillaDiv.textContent = "Contenido de la zapatilla"; // Aquí puedes establecer el contenido de la zapatilla

const zapatillasContainer = document.getElementById("zapatillaDiv");
zapatillasContainer.appendChild(zapatillaDiv);


// Evento para Ordenar la data por modelo

const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", () => {
  const selectedOrder = ordenar.value; 
  const sortedData = orderByAlphabetical(data, item => item.name, selectedOrder);
  zapatillaDiv.innerHTML = renderItems(sortedData);
});

// Evento para limpiar los filtros

const limpiar = document.getElementById('button-clear');
limpiar.addEventListener("click", () => {
  ordenar.value= "todos";
  filter.value="allbrands";
  zapatillaDiv.innerHTML = renderItems(data); 
});

// Evento para invocar la data filtrada

const filter = document.querySelector("select[name='brand']");
filter.addEventListener("change", () => {
  const selectedBrand = filter.value; // Obtener el valor seleccionado en el select
  const filteredData = filterDataByBrand(data, 'brand', selectedBrand); // Pasa el valor seleccionado como tercer argumento
  zapatillaDiv.innerHTML = renderItems(filteredData); 
});

