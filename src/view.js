import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "<ul>";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
  <li><dl itemscope itemtype="Estilo Athleisure">
    <link rel="stylesheet" href="style.css">
    <div class="grilla">
      <dl itemscope itemtype="Normcore Aesthetics" '>
    <div class= "contenido">
        <div class= "tarjeta">
            <div class ="hover"></div>
              <img src="${data[i].imageUrl}" alt="Nike Air Max 1"/'>
                <div class="description"></div>
              <dt><strong>Nombre:</strong></dt>
                <dd itemprop="name">${data[i].brand}</dd>
                <dt><strong>Modelo::</strong></dt>
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
          </dl>
          </li>`
  
    cajadevariables += htmlR;
  }
   return cajadevariables +="</ul>"
};
