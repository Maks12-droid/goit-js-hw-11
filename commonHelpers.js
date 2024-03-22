import{S as u,i as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(a){c.innerHTML="";const s=d.map(t=>`<li class="img-blok">
        <a href="${t.largeImageURL}">     
    <img  src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${t.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${t.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${t.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${t.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");c.insertAdjacentHTML("beforeend",s),new u(".gallery a",{captionsData:"alt"}).refresh()}function f(){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const c=document.querySelector("ul.gallery");let d,n;document.querySelector("input");const h=document.querySelector("form");document.querySelector(".preloader");const p=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=p;h.addEventListener("submit",async a=>{a.preventDefault(),n=new FormData(a.currentTarget).get("search");try{const o=await f(n);d.length||l.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(o)}catch{l.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{}});
//# sourceMappingURL=commonHelpers.js.map
