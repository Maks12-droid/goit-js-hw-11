import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

export const setGallery = document.querySelector('ul.gallery');
export let imgset;
export let searchImgs;

const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');

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
  
  const formData = new FormData(event.currentTarget);
  searchImgs = formData.get('search'); 

  try {
    const images = await fetchImg(searchImgs);

    if (!imgset.length) {
      iziToast.error({
        color: 'red',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }

    renderImgs(images);
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `:x: Sorry, there was a mistake. Please try again!`,
      position: 'topRight',
    });
  } finally {
    // hideLoader();
    // handleLoad();
  }
});
