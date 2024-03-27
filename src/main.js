import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './js/pixabay-api';

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

  const searchImgs = event.currentTarget.elements.search.value.trim();

  if (!searchImgs) {
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
      renderImgs(imgset); // Викликаємо функцію для відображення зображень
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

function renderImgs(images) {
  setGallery.innerHTML = '';

  const imgGallery = images
    .map(
      image => `<li class="img-blok">
        <a href="${image.largeImageURL}">     
          <img src="${image.webformatURL}"
          data-source="${image.largeImageURL}"
          alt="${image.tags}">
          <ul class="image-descript">
            <li>
              <h3>likes</h3>
              <p>${image.likes}</p>
            </li>
            <li>
              <h3>views</h3>
              <p>${image.views}</p>
            </li>
            <li>
              <h3>comments</h3>
              <p>${image.comments}</p>
            </li>
            <li>
              <h3>downloads</h3>
              <p>${image.downloads}</p>
            </li>
          </ul>
        </a>
      </li>`
    )
    .join('');

  setGallery.insertAdjacentHTML('beforeend', imgGallery);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });

  lightbox.refresh();
}

