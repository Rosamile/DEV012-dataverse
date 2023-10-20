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
const zapatilla = document.createElement()
};

export const orderByAlphabetical = (data, getter, order = 'asc') => {
  data.sort((a, b) => {
      const first = getter(a);
      const second = getter(b);
      const compare = first.localeCompare(second);
      return order === 'asc' ? compare : -compare;
  });
  return data;
};

export const filterShoesBrands = function(shoesBrands){
  const elements = data.brand.filter((brand) =>  {
    return brand.type.indexOf(shoesBrands) !== -1;
  });
  
  if (shoeBrands === "all") {
    elements = data.brand
  } 
  console.log(elements);
  
  return elements; 
} 