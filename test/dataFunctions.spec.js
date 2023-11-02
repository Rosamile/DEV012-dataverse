import { example, anotherExample } from '../src/dataFunctions.js';
import  data   from './data.js';

// Prueba Unitaria Ordenamiento

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

// Prueba Unitaria Filtro Marca

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

// Prueba Unitaria Filtro Color

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
