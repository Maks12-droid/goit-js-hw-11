import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

const fillForm = document.getElementById('searchForm');

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
  const searchImgs = formData.get('search'); 
  
  if (!searchImgs.trim()) {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search query.`,
      position: 'topRight',
    });
    return;
  }

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
      renderImgs(images);
    }
  } catch (error) {
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

