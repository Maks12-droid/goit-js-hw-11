import{S as u,i as n}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(i){const o=document.querySelector("ul.gallery");o.innerHTML="";const r=i.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");o.insertAdjacentHTML("beforeend",r),new u(".gallery a",{captionsData:"alt"}).refresh()}let a="";const p=document.querySelector("input"),f=document.querySelector("form"),c=document.querySelector(".preloader"),h=()=>{c.style.display="flex"},g=()=>{c.style.display="none"},d=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=d;f.addEventListener("submit",async i=>{i.preventDefault();const o=p.value.trim();if(o===""){n.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}a=o,h();try{const s=await fetchImg(a);s.length?m(s):n.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(r){console.error(r),n.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{g(),d()}});
//# sourceMappingURL=commonHelpers.js.map
