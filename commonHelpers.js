import{S as d,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function u(a){c.innerHTML="";const o=n.map(e=>`<li class="img-blok">
        <a href="${e.largeImageURL}">     
    <img  src="${e.webformatURL}"
    data-source="${e.largeImageURL}"
    alt="${e.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${e.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${e.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${e.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${e.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");c.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt"}).refresh()}function m(){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:f,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const c=document.querySelector("ul.gallery");let n,f;document.querySelector("input");const h=document.querySelector("form");document.querySelector(".preloader");const p=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=p;h.addEventListener("submit",async a=>{a.preventDefault();const s=new FormData(a.currentTarget).get("search");try{const e=await m(s);n=e.hits,n.length||l.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u(e)}catch{l.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{}});
//# sourceMappingURL=commonHelpers.js.map
