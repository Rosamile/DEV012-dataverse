
# Dataverse

# Preámbulo del desarrollo

Este proyecto ha sido desarrollado bajo el marco de aprendizaje del bootcamp de Laboratoria. Como segundo proyecto en duplas, tiene la finalidad de enzeñarnos a cómo manipular de manera más dinámica el DOM mediante la **creación de elementos HTML mediante el uso de Javascript**. También, a trabajar con una **base de datos** y aprender a **filtrar y arreglar** elementos de esa BBDD para poder disponer de su información en la manera en la que se necesite. 

***

# Creación de la data mediante uso de IA

El proyecto también incluye una parte muy escencial para el futuro del desarrollo de páginas web mediante la introducción de **Inteligencias Artificiales** que nos ayudaron a crear la base de datos con la cual estaríamos trabajando mediante el **prompting**. 

Un ejemplo de las directrices entregadas a la IA de ChatGPT fue la siguiente: 

 src/media/prompting.PNG

Se le dio una serie de instrucciones teniendo en cuenta la estructura que queríamos que tuviera la base de datos. Era un arreglo de ojetos con diferentes valores, que adicionalmente, tendría otro objeto con más parámetros dentro. Al ver que no nos dio toda la data solicitada, pasamos a pedirle que nos diera 16 elementos adicionales.

![prompting-2](./prompting-2.png)

La data que nos pasó la IA quedó dispuesta de esta manera: 

![prompting-2](./prompting-3-png.png)

***

# Historias de usuario

Se generaron las siguientes historias de usuario dentro de la EPICA del proyecto

Como usuario quiero  poder ver los modelos  de zapatos pertenecientes al estilo Altheisure en forma de tarjetas.

Como usuario quiero poder filtrar los modelos de la marca de zapatos por medio de un desplegable.

Como usuario quiero poder filtrar los  zapatos teniendo en cuenta su color  por medio de un desplegable.

Como usuario quiero filtrar y ordenar la información de los zapatos de forma simultánea para tener una vista de los modelos y colores que quiero.

Como usuario quiero tener un contador que indique cuantos modelos están en pantalla


Como usuario quiero poder tener un desplegable que me permita ordenar  los modelos de la marca de zapatos de forma ascendente y descendente.

Como usuario registrado quiero tener una página responsive para poder interactuar desde cualquier dispositivo.

Como usuario registrado quiero tener un botón que me permita restablecer la información sin actualizar la página.

***


# Diseño de la página


Para el diseño, nos enfocamos en trabajar con un modelo de baja fidelidad el cual se fue construyendo con un esquema inicial que fue modificado al pedir feedback a nuestras compañeras.

![baja-fide](src/media/image-1.png)

En el diseño de alta fidelidad, se siguió el mismo principio. Decidimos trabajar con un esquema de colores que se ajustara a los que se utilizan en las portadas del manga de *One Piece** y, siguiendo esta filosofía para el diseño, las tarjetas que muestran la información se parecen a los **Bounty** posters del mismo anime dando el resultado final de la página.

![alta-fide-desktop](https://www.figma.com/file/OeRuh58gXg7qh5x2BgK8F7/Data-Verse?type=design&node-id=0%3A1&mode=design&t=BbYLw3d9capczZq1-1)
)

El diseño que se planificó para la versión de teléfonos, por diversos motivos, no quedó con relación 1:1 a lo detallado en figma ya que presentamos algunos problemas con el menú de hamburguesa.


![alta-fide-mobile](![image](https://github.com/Rosamile/DEV012-dataverse/assets/138530369/3e8188db-cccb-44d0-b57f-60592bb84d94)
)


***

# Problemas detectados en tests de usabilidad

Durante uno de los deploy que realizamos para ir buscando feedback de usuarias, se nos hizo ver la falta de claridad al momento de seleccionar las opciones de los filtros/sort. 

![feedback-usabilidad]()

Otro de los problemas encontrados durante las pruebas con usuarios del producto casi terminado fue el limpiar el resto de los filtros y dejar solo el seleccionado para dar claridad sobre cuál era el filtro que está en uso.

***
