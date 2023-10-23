import data from "./data/dataset.js";

// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = () => {
  return 'example';
}
// Función para mostrar la data en HTML
export const pintar = (data) => { 
  for (let i = 0; i <data.length; i++) {
    return pintar;
  }
}
/*function tipodeZapatillas(zapatillas) {
const zapatilla = document.createElement()
}*/

// Función para ordenar la data A-Z -- NO ESTÁ FUNCIONANDO BIEN ESTÁ ORDENANDO MAL
/*export const orderByAlphabetical = (data, getter, order = 'asc') => {
  data.sort((a, b) => {
      const first = getter(a);
      const second = getter(b);
      const compare = first.localeCompare(second);

      if (order=== 'asc'){return compare;} else {
        return -compare;
      };
 //     return order === 'asc' ? compare : -compare;
    const first = getter(a);
    const second = getter(b);
    const compare = first.localeCompare(second);
    return order === 'asc' ? compare : -compare;
  });
  console.log(data);

  return data;
};*/
// Función Pura para ordenar A-Z
export const orderByAlphabetical = (data, getter, order = 'asc') => {
  // Copia el arreglo original
  const dataCopy = [...data];

  // Ordena la copia del arreglo sin modificar el original
  dataCopy.sort((a, b) => {
    const first = getter(a);
    const second = getter(b);
    const compare = first.localeCompare(second);
    return order === 'asc' ? compare : -compare;
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
  console.log(filteredBrand);

  return filteredBrand;
}

/*export const filterShoesBrands = function(shoesBrands){
  const elements = data.brand.filter((brand) =>  {
    return brand.type.indexOf(shoesBrands) !== -1;
  });
  
  if (shoeBrands === "all") {
    elements = data.brand
  } 
  console.log(elements);
  
  return elements; 
} */