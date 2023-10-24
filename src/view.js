import data from "./data/dataset.js";

// Función para renderizar datos al HTML 
export const renderItems = (data) => {
  let cajadevariables = "<ul>";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
    <main id="root"> 
    <ul itemscope itemtype="Estilo Athleisure">
    <link rel="stylesheet" href="style.css">
    <li class="grilla">
        <ul itemscope itemtype="Estilo Athleisure">
            <li class="contenido">
                <ul>
                    <li class="tarjeta">
                        <ul>
                            <li class="hover">
                                <img src="${data[i].imageUrl}" alt=""/>
                            </li>
                            <li class="description"></li>
                            <ul class ="front">
                                <dl>
                                    <dt><strong>Marca:</strong></dt>
                                    <dd itemprop="brand">${data[i].brand}</dd>
                                    <dt><strong>Modelo:</strong></dt>
                                    <dd itemprop="name">${data[i].name}</dd>
                                    <dt><strong>Descripción:</strong></dt>
                                    <dd itemprop="description">${data[i].description}</dd>
                                    </ul>
                              <ul class ="back">     
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
                                    </ul>
                               </li>
                                    </dl>
                            </li> 
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
</main>
</ul>`
  
    cajadevariables += htmlR;
  }
  return cajadevariables +="</ul>"
};
