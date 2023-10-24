import data from "./data/dataset.js";

// Función para mostrar la data renderizada

export const pintar = (data) => {
  for (let i =0;i<data.length;i++){
    return 'pintar';
  }
}
// Función para crear los elementos de la data

export const tipoDeZapatillas = ((zapatillaDiv) => {
  const zapatillas = document.createElement(data);
  zapatillaDiv.textContent = zapatillas.data;

});

// Función para Ordenar Alfabeticamente el modelo de la marca filtrada

export const orderByAlphabetical = (data, getter, order = 'asc') => {
  
  // Creamos una copia del arreglo original
  const dataCopy = [...data];
  // Ordenamos la copia del arreglo
  dataCopy.sort((a, b) => {
    const first = getter(a);
    const second = getter(b);
    const compare = first.localeCompare(second);

    if (order === 'asc') {
      return compare;
    } else {
      return -compare;
    }
  });

  return dataCopy; // Devuelve la copia ordenada
};

// Función Pura para filtrar por marca de zapatillas

export const filterDataByBrand = (data, filterBy, value) => {
  const filteredBrand = [];
  for (const item of data) {
    if (item[filterBy] === value) {
      filteredBrand.push(item);
    }
  }
  return filteredBrand;
} 