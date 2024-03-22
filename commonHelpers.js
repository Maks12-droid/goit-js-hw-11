import{S as m,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(a){d.innerHTML="";const s=n.map(t=>`<li class="img-blok">
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
  </a></li>`).join("");d.insertAdjacentHTML("beforeend",s),new m(".gallery a",{captionsData:"alt"}).refresh()}function h(){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const d=document.querySelector("ul.gallery");let n,l;document.querySelector("input");const p=document.querySelector("form"),y=document.querySelector(".preloader"),g=()=>{y.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=u;p.addEventListener("submit",async a=>{a.preventDefault(),l=new FormData(a.currentTarget).get("search");try{const o=await h(l);n=o.hits,n.length||c.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f(o)}catch{c.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{g(),u()}});
//# sourceMappingURL=commonHelpers.js.map
