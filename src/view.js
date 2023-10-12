import data from "./data/dataset.js";
export const renderItems = (data) => {
  let cajadevariables = "";
  for (let i =0;i<data.length;i++) {  
    let htmlR = "<dl itemscope itemtype=\"Normcore Aesthetics\">" +
    "<img src=\"" + data[i].imageUrl + "\" alt=\"Nike Air Max 1\" />" +
    "</dl>";
    cajadevariables=cajadevariables+htmlR;
  }
  document.getElementById ('zapatillas').innerHTML=cajadevariables;
  [

    //información de dataset renderizada
    ```html
  <dl itemscope itemtype="Normcore Aesthetics">
    <img src="https://th.bing.com/th/id/OIG.05t3Jm5HE_bAs_w7PUGd?pid=ImgGn" alt="Nike Air Max 1" />
    <dt>Nombre:</dt><dd itemprop="name">Air Max 1</dd>
    <dt>Descripción:</dt><dd itemprop="description">El Nike Air Max 1 sentó las bases para el auge de las zapatillas con tecnología Air Max. Su diseño icónico y la unidad visible de aire en el talón hicieron que se convirtiera en un clásico instantáneo en 1987.',</dd>
    <dt>Año del modelo:</dt><dd itemprop="modelyear">1987</dd>
    <dt>Material:</dt><dd itempropo="material" >Leather and Mesh</dd>
    <dt>Gènero</dt><dd itemprop="gender">Unisex</dd>
    <dt>Colores:</dt><dd itemprop="colors" >'White', 'Red', 'Blue'</dd>
    <dt>Tallas:</dt><dd itemprop="sizes" >"6", "7", "8", "9", "10", "11"</dd>
  </dl>

  
    <img src="https://th.bing.com/th/id/OIG._eXLvUFm36dVBnqnHHY_?pid=ImgGn" alt="Nike Air Force 1" />
    <dt>Nombre:</dt><dd itemprop="name">Air Force 1</dd>
    <dt>Descripción:</dt><dd itemprop="description">"Lanzado originalmente en 1982, el Nike Air Force 1 ha sido un pilar en la cultura de las zapatillas, siendo adorado tanto en las canchas como en las calles.",</dd>
    <dt>Año del modelo:</dt><dd itemprop="modelyear">1982</dd>
    <dt>Material:</dt><dd itempropo="material" >Leather</dd>
    <dt>Gènero</dt><dd itemprop="gender">Unisex</dd>
    <dt>Colores:</dt><dd itemprop="colors" >'White', 'Black'</dd>
    <dt>Tallas:</dt><dd itemprop="sizes" >"6", "7", "8", "9", "10", "11"</dd>
  </dl>

  <img src="https://th.bing.com/th/id/OIG.lUJX.Ex.3EhCR6xSsxJk?pid=ImgGn" alt="Nike SB Dunk" />
  <dt>Nombre:</dt><dd itemprop="name">Air Force 1</dd>
  <dt>Descripción:</dt><dd itemprop="description">"Originalmente lanzado como una zapatilla de baloncesto, el Nike SB Dunk se reinventó para el skateboarding. Es adorado por skaters y coleccionistas por igual.",</dd>
  <dt>Año del modelo:</dt><dd itemprop="modelyear">2002</dd>
  <dt>Material:</dt><dd itempropo="material" >Leather and suede</dd>
  <dt>Gènero</dt><dd itemprop="gender">Unisex</dd>
  <dt>Colores:</dt><dd itemprop="colors" >'Green','Brown','Yellow'</dd>
  <dt>Tallas:</dt><dd itemprop="sizes" >"6", "7", "8", "9", "10", "11"</dd>
</dl>

  ```
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