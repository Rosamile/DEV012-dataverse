import { pintar, orderByAlphabetical} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


const ordenar = document.querySelector("select[name='ordenar']");
ordenar.addEventListener("change", () => {
  const selectedOrder = ordenar.value ;
  const sortedData = orderByAlphabetical(data, item => item.name, selectedOrder);
  zapatilla.innerHTML = renderItems(sortedData); // Volver a renderizar con los datos ordenados
})

const zapatilla =  document.getElementById("zapatillas")
zapatilla.innerHTML = renderItems(data); 

//const datafiltrada = 
