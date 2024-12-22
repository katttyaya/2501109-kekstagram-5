import { getPhotos} from './load.js';
import { setFormSubmit } from './form.js';
import { alertError } from './util.js';
import { addFilters } from './filters.js';
import { drawPhotos } from './draw-photos.js';

let photos = [];

getPhotos()
  .then((data) => {
    drawPhotos(data);
    photos = data.slice();
  })
  .then(() => document.querySelector('.img-filters').classList.remove('img-filters--inactive'))
  .catch(() => alertError());

addFilters();
setFormSubmit();

export {photos};
