import{S as c,i as n}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function d(s){const t=document.querySelector("ul.gallery");t.innerHTML="";const r=s.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");t.insertAdjacentHTML("beforeend",r),new c(".gallery a",{captionsData:"alt"}).refresh()}function u(s){const t="https://pixabay.com/api/",r=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${t}?${r}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const f=document.querySelector("input"),a=document.querySelector("form"),p=document.querySelector(".preloader"),h=()=>{p.style.display="none"},m=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=m;a.addEventListener("submit",s=>{s.preventDefault();const t=f.value.trim();t!==""?(u(t).then(r=>{d(r.hits)}).catch(r=>{console.log(r),h(),n.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}),a.reset()):n.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
