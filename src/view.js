import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
    <dl itemscope itemtype="Estilo Athleisure">
    <img src="${data[i].imageUrl}" alt="Nike Air Max 1">
              <dt><strong>Nombre:</strong></dt>
                <dd itemprop="name">${data[i].name}</dd>
                <dt><strong>Descripción:</strong></dt>
               <dd itemprop="description">${data[i].description}</dd>
              <dt><strong>Año del modelo:</strong></dt>
              <dd itemprop="modelyear">${data[i].facts.modelyear}</dd>
             <dt><strong>Material:</strong></dt>
            <dd itemprop="material">${data[i].facts.material}</dd>
         <dt><strong>Género:</strong></dt>
         <dd itemprop="gender">${data[i].facts.gender}</dd>
         <dt><strong>Colores:</strong></dt>
         <dd itemprop="colors">${data[i].facts.colors}</dd>
         <dt><strong>Tallas:</strong></dt>
         <dd itemprop="sizes">${data[i].facts.sizes}</dd> 
          </dl>`
  
    cajadevariables += htmlR;
  }

  document.getElementById("zapatillas").innerHTML = cajadevariables; //ESTO VA EN MAIN.JS
  console.log(data);
};
