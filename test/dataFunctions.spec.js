
import {orderByAlphabetical, filterDataByBrand, filterFactsByColor, getYearWithMaxModels, tipoDeZapatillas } from '../src/dataFunctions.js';
import {data as fakeData} from "./data.js";
// Prueba Unitaria Ordenamiento ASC
describe('orderByAlphabetical', () => {

  it('Debe ordenar un arreglo', () => {

    //Trae la data que vamos a probar
    const dataDesordenada = [{name:'Air Max 1'},{name:'Superstar'},{name:'Go Walk'}];
    const dataOrdenada = [{name:'Air Max 1'},{name:'Go Walk'},{name:'Superstar'}];
    //Guarda el ordenamiento
    const resultadoOrdenado = orderByAlphabetical (dataDesordenada, item => item.name, 'asc');
    //Devuelve el resultado ordenado y lo compara con el ejemplo
    expect(resultadoOrdenado).toStrictEqual(dataOrdenada);
  });
});

// Prueba Unitaria Ordenamiento DESC
describe('orderByAlphabetical', () => {
  it('Debe ordenar de forma descendente', () => {
    const dataAscendente = [{name:'Air Max 1'},{name:'Go Walk'},{name:'Superstar'}];
    const dataDescentente = [{name:'Superstar'},{name:'Go Walk'},{name:'Air Max 1'}];
    const resultadoOrdenado = orderByAlphabetical (dataAscendente, item => item.name, 'desc');
    expect(resultadoOrdenado).toStrictEqual(dataDescentente);
  });
});


// Prueba Unitaria Filtro Marca
describe('filterDataByBrand', () => {

  it('Debe filtrar un arreglo por brand', () => {

    //Trae la data que vamos a probar
    const dataParaFiltrarPorBrand = [{brand:'Nike'},{brand:'Fila'},{brand:'Puma'}];
    //Ejemlo de como debe quedar la data
    const dataFiltradaPorBrand = [{brand:'Nike'},{brand:'Fila'},{brand:'Puma'}];
    //Guarda el filtro
    const resultadoFiltroPorBrand = filterDataByBrand (dataParaFiltrarPorBrand);
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect(resultadoFiltroPorBrand).toStrictEqual(dataFiltradaPorBrand);
  });
  /*// Prueba Unitaria Filtro por marca  No existente
  it('Debe filtrar un arreglo no existente por brand', () => {
    const resultadoBrandNoExistente = filterDataByBrand (fakeData,'converse');
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect (resultadoBrandNoExistente.length).toStrictEqual(0);
  });*/
});

// Prueba Unitaria Filtro Color existente
describe('filterFactsByColor', () => {

  it('Debe filtrar un arreglo por color pink', () => {
    const resultadoFiltroPorColor = filterFactsByColor(fakeData, 'pink');
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect (resultadoFiltroPorColor.length).toEqual(1);
  });
});


// Prueba Unitaria Filtro Color No existente
describe('filterFactsByColor', () => {

  it('Debe filtrar un arreglo no existente en la data', () => {
    const resultadoColorNoExistente = filterFactsByColor(fakeData, 'gold');
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect (resultadoColorNoExistente.length).toEqual(0);
  });
});

//prueba unitaria estadistica
describe('getYearWithMaxModels', () => {

  it('Debe generar un dato tipo número', () => {
    const resultadoEstadisticaPorAño = getYearWithMaxModels(fakeData, 'modelYear');
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect (resultadoEstadisticaPorAño).toBe(2002);
  });
});

describe('tipoDeZapatillas', () => {
  it('Debe crear un elemento en el contenedor', () => {
    // Crear un elemento div para actuar como contenedor
    const zapatillaDiv = document.createElement('div');
    const resultadoTipoDeZapatilla = tipoDeZapatillas (fakeData, zapatillaDiv)
    
    // Verificar que el texto del elemento sea el mismo que el valor de 'data'
    expect(resultadoTipoDeZapatilla.length).toBe(1);
  });
});