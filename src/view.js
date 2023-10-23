import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "<ul>";
  for (let i = 0; i < data.length; i++) {
    let htmlR = `
    <ul itemscope itemtype="Estilo Athleisure">
    <link rel="stylesheet" href="style.css">
    <li class="grilla">
        <ul itemscope itemtype="Normcore Aesthetics">
            <li class="contenido">
                <ul>
                    <li class="tarjeta">
                        <ul>
                            <li class="hover">
                                <img src="${data[i].imageUrl}" alt="Nike Air Max 1" />
                            </li>
                            <li class="description"></li>
                            <li>
                                <dl>
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
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
</ul>`
  
    cajadevariables += htmlR;
  }
   return cajadevariables +="</ul>"
};
