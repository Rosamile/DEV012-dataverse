
import {orderByAlphabetical, filterDataByBrand, filterFactsByColor, getYearWithMaxModels, tipoDeZapatillas } from '../src/dataFunctions.js';
import {data as fakeData} from "./data.js";
// Prueba Unitaria Ordenamiento
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
});

// Prueba Unitaria Filtro Color
describe('filterFactsByColor', () => {

  it('Debe filtrar un arreglo por color pink', () => {
    const resultadoFiltroPorColor = filterFactsByColor(fakeData, 'pink');
    //Devuelve el resultado filtrado y lo compara con el ejemplo
    expect (resultadoFiltroPorColor.length).toEqual(1);
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
//prueb aunitaria crear elemnto
document.body.innerHTML = '<div id="miDiv"></div>';
describe('tipoDeZapatillas', () => {
  it('Debe crear un elemento', () => {
    
    const zapatillaDiv = document.getElementById('miDiv');
    
    tipoDeZapatillas(zapatillaDiv)
    
    //Devuelve el resultado 
    const liElement = zapatillaDiv.querySelector('li');
    expect(liElement).not.toBeNull();
  });
});