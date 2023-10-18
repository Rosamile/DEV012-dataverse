import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
    <div class="Grilla" style='max-width:1200px; height:430px; style-display:flex; align-items:strech; flex-wrap: wrap;'>
    <dl itemscope itemtype="Normcore Aesthetics" '>
    <div style='width:100%; max-width:1200px; height:430px; display:flex; flex-wrap:wrap; justify-content:center; margin:auto;'>
<div class= "Tarjeta" style='width: 330px; height: 430px; border-radius:8px; box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2); overflow:hidden; margin:20px; text-align:center;'>
<div class ="hover" style='box-shadow:0 12px 16px rgba(0,0,0,0.2);'></div>
    <img src="${data[i].imageUrl}" alt="Nike Air Max 1"/ style='width:330px; height:220px;'>
    <div class="Description" style='font-weight:100; font-size:10px; padding:0.1rem;'></div>
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
