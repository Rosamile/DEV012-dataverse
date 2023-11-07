
import {orderByAlphabetical, filterDataByBrand, filterFactsByColor} from '../src/dataFunctions.js';


// Prueba Unitaria Ordenamiento

describe('orderByAlphabetical', () => {

  it('Debe ordenar un arreglo', () => {

    //Trae la data que vamos a probar
    const dataDesordenada = [
      {name:'Air Max 1'},{name:'Superstar'},{name:'Go Walk'}];
      //Ejemlo de como debe quedar la data
    const dataOrdenada = [{name:'Air Max 1'},{name:'Go Walk'},{name:'Superstar'}];
    //Guarda el ordenamiento
    const resultadoOrdenado = orderByAlphabetical (dataDesordenada, item => item.name, 'asc');
    //Devuelve el resultado ordenado y lo compara con el ejemplo
    expect(resultadoOrdenado).toStrictEqual(dataOrdenada);
  });
});

// Prueba Unitaria Filtro Marca
describe('filterDataByBrand', () => {

  it('Debe filtrar un arreglo por brand', () => {

    //Trae la data que vamos a probar
    const dataParaFiltrarPorBrand = [{brand:"Nike"},{brand:"Adidas"},{brand:"Skechers"}];

    //Ejemlo de como debe quedar la data
    const dataFiltradaPorBrand = [{brand:"Nike"},
    ];
    //Guarda el filtro
    const resultadoFiltroPorBrand = filterDataByBrand(dataParaFiltrarPorBrand);
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect(resultadoFiltroPorBrand).toStrictEqual(dataFiltradaPorBrand);
  });
});

// Prueba Unitaria Filtro Color
describe('filterFactsByColor', () => {

  it('Debe filtrar un arreglo por color', () => {

    //Trae la data que vamos a probar
    const dataParaFiltrarPorColor = [
      {color: "multicolor"},
      {color: "white"},
      {color: "blue"}
    ];
    //Ejemlo de como debe quedar la data
    const dataFiltradaPorColor = [ 
      {color: "blue"}];
    //Guarda el filtro
    const resultadoFiltroPorColor = filterFactsByColor(dataParaFiltrarPorColor);
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect(resultadoFiltroPorColor).toEqual(dataFiltradaPorColor);
  });
});


