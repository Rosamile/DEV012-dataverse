import { example, pintar } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//pintar (data)
renderItems(data)

console.log(example, renderItems(data), data);
