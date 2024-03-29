import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImgs } from './js/render-functions';
import {fetchImg}  from './js/pixabay-api.js'
let searchImgs = '';
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
fillForm.addEventListener('submit',  event => {
  event.preventDefault();
  const input = inputfield.value.trim();
  if (input !== '') {
       // тут додайте лоадер
      fetchImg(input)
          .then((photos) => {
            renderImgs(photos.hits);
              // тут додайте лоадер
          })
          .catch((error) => {
              console.log(error);
              hideLoader();
              iziToast.error({
                  message: 'Sorry, an error occurred while loading. Please try again!',
                  theme: 'dark',
                  progressBarColor: '#FFFFFF',
                  color: '#EF4040',
                  position: 'topRight',
              });
          });
          fillForm.reset();
  } else {
      iziToast.show({
          message: 'Please complete the field!',
          theme: 'dark',
          progressBarColor: '#FFFFFF',
          color: '#EF4040',
          position: 'topRight',
      });
  }
});
export { searchImgs };