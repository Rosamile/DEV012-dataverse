import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
    <link rel="stylesheet" href="style.css">
    <div class="grilla">
      <dl itemscope itemtype="Normcore Aesthetics" '>
    <div class= "contenido">
        <div class= "tarjeta">
            <div class ="hover"></div>
              <img src="${data[i].imageUrl}" alt="Nike Air Max 1"/'>
                <div class="description"></div>
              <dt>Nombre:</dt>
                <dd itemprop="name">${data[i].name}</dd>
                <dt>Descripción:</dt>
               <dd itemprop="description">${data[i].description}</dd>
              <dt>Año del modelo:</dt>
              <dd itemprop="modelyear">${data[i].facts.modelyear}</dd>
             <dt>Material:</dt>
            <dd itemprop="material">${data[i].facts.material}</dd>
         <dt>Género</dt>
         <dd itemprop="gender">${data[i].facts.gender}</dd>
         <dt>Colores:</dt>
         <dd itemprop="colors">${data[i].facts.colors}</dd>
         <dt>Tallas:</dt>
         <dd itemprop="sizes">${data[i].facts.sizes}</dd>
          </div>  
          </dl>
    </div> 
    </div>`;
    cajadevariables += htmlR;
  }

  document.getElementById("zapatillas").innerHTML = cajadevariables;
  console.log(data);
};
//Dataset
// Aquí comienza
// tu código y puedes retornar lo que tu necesites
/*const dataContenedor = document.getElementById('zapatillas');
function crearZapatos() {

  const marcaDeZapatos = document.createElement('article');
  dataContenedor.appendChild(marcaDeZapatos);
*/
//return "name";
