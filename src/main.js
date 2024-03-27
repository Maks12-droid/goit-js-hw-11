import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';

let searchImgs = '';

const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');
const setGallery = document.querySelector('ul.gallery');

const preloader = document.querySelector('.preloader');

const showLoader = () => {
  preloader.style.display = 'flex';
};

const hideLoader = () => {
  preloader.style.display = 'none';
};

const handleLoad = () => {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
};

window.onload = handleLoad;

fillForm.addEventListener('submit', async event => {
  event.preventDefault();

  searchImgs = event.currentTarget.querySelector('input[name="search"]').value.trim();

  showLoader();

  try {
    const images = await fetchImg(searchImgs);
    const imgset = images.hits;

    if (!imgset.length) {
      iziToast.error({
        color: 'red',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    } else {
      renderImgs(imgset);
    }
  } catch (error) {
    console.error(error); 
    iziToast.error({
      color: 'red',
      message: `:x: Sorry, there was a mistake. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});

export { searchImgs };


