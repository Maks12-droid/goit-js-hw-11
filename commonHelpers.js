import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(i){const t="https://pixabay.com/api/",o=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${t}?${o}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const m=document.querySelector("input"),l=document.querySelector("form"),u=document.querySelector(".preloader"),c=document.querySelector(".gallery"),h=()=>{u.style.display="flex"},d=()=>{u.style.display="none"},p=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=p;let g=new SimpleLightbox(".gallery a");l.addEventListener("submit",i=>{i.preventDefault();const t=m.value.trim();t!==""?(h(),f(t).then(o=>{if(o.hits.length>0){const s=o.hits.map(e=>`<a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>`).join("");c.innerHTML=s,g.refresh()}else c.innerHTML="",a.show({message:"No images found!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});d()}).catch(o=>{console.error(o),d(),a.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}),l.reset()):a.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
