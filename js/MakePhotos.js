import { makeAllPictures } from './DrawingMiniature.js';
import { getPosts } from './data.js';
import { openBigPost } from './BigPictures.js';

const allPosts = getPosts();
makeAllPictures(allPosts);

const photoOnClick = (evt) => {
  const currentElement = evt.target.closest('.picture');
  if (currentElement) {
    const currentPicture = allPosts.find((photo) => photo.url === currentElement.querySelector('.picture__img').getAttribute('src'));
    openBigPost(currentPicture);
  }
};

document.querySelector('.pictures').addEventListener('click', photoOnClick);
