import data from "./data/dataset.js";
//Dataset
// Aquí comienza
// tu código y puedes retornar lo que tu necesites
export const renderItems = (data) => {
  let cajadevariables = "";

  for (let i = 0; i < data.length; i++) {
    let htmlR = `
        <dl itemscope itemtype="Normcore Aesthetics" style='box-sizing:border-box; border-width:5px; padding:30px; width: 300px;'>
          <dt style='justify-conten:auto;'>Nombre:</dt>
          <dd itemprop="name">${data[i].name}</dd>
          <dt>Descripción:</dt>
          <dd itemprop="description">${data[i].description}</dd>
          <dt>Año:</dt>
          <dd itemprop="model_year">${data[i].facts.model_year}</dd>
          <dt>Material:</dt>
          <dd itemprop="material">${data[i].facts.material}</dd>
          <dt>Género</dt>
          <dd itemprop="gender">${data[i].facts.gender}</dd>
          <dt>Colores:</dt>
          <dd itemprop="colors">${data[i].facts.colors}</dd>
          <dt>Tallas:</dt>
          <dd itemprop="sizes">${data[i].facts.sizes}</dd>
          <img src="${data[i].imageUrl}" alt="Nike Air Max 1" style='height:536px; width:377px; border-radius:45px; flex-shrink:0; opacity:0.8; background-color: #D9D9D9;'/>
        </dl>`;

    cajadevariables += htmlR;
  }

  document.getElementById('zapatillas').innerHTML = cajadevariables;
  console.log(data);
}