import{i as n}from"./assets/vendor-bee2f3af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let i;document.querySelector("input");const f=document.querySelector("form"),m=document.querySelector("ul.gallery"),l=document.querySelector(".preloader"),y=()=>{l.style.display="flex"},h=()=>{l.style.display="none"},d=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=d;f.addEventListener("submit",async s=>{if(s.preventDefault(),i=s.currentTarget.elements.search.value.trim(),!i){n.error({color:"yellow",message:" Please fill in the field for search query.",position:"topRight"}),m.innerHTML="";return}y();try{const t=await u(i);imgset=t.hits,imgset.length||n.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{n.error({color:"red",message:":x: Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{h(),d()}});
//# sourceMappingURL=commonHelpers.js.map
