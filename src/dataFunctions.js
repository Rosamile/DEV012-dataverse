import data from "./data/dataset.js";

// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = () => {
  return 'example';
}
export const pintar = (data) => {console.log(data)
  for (let i =0;i<data.length;i++){
    return 'pintar';
  }
}
function tipodeZapatillas(zapatillas) {
const zapatilla = document.createElement(data)
};

export const orderByAlphabetical = (data, getter, order = 'asc') => {
  data.sort((a, b) => {
      const first = getter(a);
      const second = getter(b);
      const compare = first.localeCompare(second);

      if (order === 'asc') {
          return compare;
      } else {
          return -compare;
      }
  });
  return data;
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