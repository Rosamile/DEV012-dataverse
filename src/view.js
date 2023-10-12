import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "";
  for (let i =0;i<data.length;i++) {  
    let htmlR = "<dl itemscope itemtype=\"Normcore Aesthetics\">" +
    "<dt>Nombre:</dt>"+ '<dd itemprop="name">Air Max 1</dd>'+
    "<dt>Descripción:</dt>"+ '<dd itemprop="description">El Nike Air Max 1 sentó las bases para el auge de las zapatillas con tecnología Air Max. Su diseño icónico y la unidad visible de aire en el talón hicieron que se convirtiera en un clásico instantáneo en 1987.</dd>'+
    "<dt>Año del modelo:</dt>"+ '<dd itemprop="modelyear">1987</dd>'+
    "<dt>Material:</dt>"+ '<dd itempropo="material" >Leather and Mesh</dd>'+
    "<dt>Gènero</dt>"+ '<dd itemprop="gender">Unisex</dd>'+
    "<dt>Colores:</dt>"+ '<dd itemprop="colors" >White,Red,Blue</dd>'+
    "<dt>Tallas:</dt>"+ '<dd itemprop="sizes" >"6", "7", "8", "9", "10", "11"</dd>'+
    "<img src=\"" + data[i].imageUrl + "\" alt=\"Nike Air Max 1\" />" +
    "</dl>";
    cajadevariables=cajadevariables+htmlR;
  }
  document.getElementById ('zapatillas').innerHTML=cajadevariables;
  [

    //información de dataset renderizada
  ]
  
  console.log(data)
}

//Dataset
// Aquí comienza
// tu código y puedes retornar lo que tu necesites
/*const dataContenedor = document.getElementById('zapatillas');
function crearZapatos() {

  const marcaDeZapatos = document.createElement('article');
  dataContenedor.appendChild(marcaDeZapatos);
*/
//return "name";