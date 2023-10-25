import data from "./data/dataset.js";

// Función para renderizar datos al HTML 
export const renderItems = (data) => {
  let cajadevariables = "<ul>";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
                            <li class="description" itemscope itemtype="Estilo Athleisure"></li>
                                <dl>
                                <img src="${data[i].imageUrl}" alt=""/></dd>
                                    <dt><strong>Marca:</strong></dt>
                                    <dd itemprop="brand">${data[i].brand}</dd>
                                    <dt><strong>Modelo:</strong></dt>
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
