import {searchImgs } from '../main';

export function fetchImg(query) {
  const BASE_URL = "https://pixabay.com/api/"
  const searchParams = new URLSearchParams({
    key: '22926721-5d20aa08498ffd1ff2f906542',
    // key: '42609290-856768105ab9e79485c69bf61',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}