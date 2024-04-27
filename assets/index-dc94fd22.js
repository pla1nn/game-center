(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const f=document.getElementById("icon");f.addEventListener("click",E);function E(){document.body.classList.toggle("night-mode"),document.body.classList.contains("night-mode")?f.src="/img/night-mode.svg":f.src="/img/day-mode.svg"}const b=document.querySelector(".check-btn-js"),i=document.querySelector(".check-input"),l=document.querySelector(".check-text");b.onclick=function(){i.value!==""&&Number(i.value)?i.value%4===0?(l.textContent="Ви народилися у високосний рік!",l.style.color="#00BB00"):(l.textContent="Ви народилися не у високосний рік!",l.style.color="#FF0000"):(l.textContent="Введіть рік народження!",l.style.color="#FF0000"),i.value=""};const q=document.querySelectorAll(".rps__list__btn");document.querySelector(".comp__score");document.querySelector(".player__score");document.getElementById("winner");const S=document.querySelector(".rps__btn");let g="";q.forEach(e=>{e.addEventListener("click",()=>{e.dataset.choice,g=N()})});function N(){const e=["rock","paper","scissors"],t=Math.floor(Math.random()*e.length);return e[t]}S.addEventListener("click",()=>{g.style.borderColor="green"});const u=document.querySelectorAll(".calculator-button"),c=document.querySelector(".calculator-output"),a=e=>[...e].map(t=>{if(t.classList.contains("active-calc-btn"))return t.classList[1]});u.forEach(e=>{e.addEventListener("click",()=>{u.forEach(t=>{t.classList.remove("active-calc-btn")}),e.classList.toggle("active-calc-btn"),e.addEventListener("click",()=>{e.classList.toggle("active-calc-btn")})})});const v=document.querySelector(".first-calculator-input"),C=document.querySelector(".second-calculator-input"),x=()=>{const e=Number(v.value),t=Number(C.value);a(u).includes("plus")?(c.textContent=e+t,isNaN(e+t)&&(c.textContent="Помилка")):a(u).includes("minus")?(c.textContent=e-t,isNaN(e-t)&&(c.textContent="Помилка")):a(u).includes("divide")?(c.textContent=e/t,isNaN(e.secondInputValue)&&(c.textContent="Помилка")):a(u).includes("multiply")&&(c.textContent=e*t,isNaN(e*t)&&(c.textContent="Помилка"))};v.addEventListener("input",x);C.addEventListener("input",x);const d=document.querySelector(".time-input"),I=document.querySelector(".time-btn-js"),L=document.getElementById("days"),y=document.getElementById("hours"),p=document.getElementById("minutes"),h=document.getElementById("seconds");document.querySelector(".time-text");L.style.marginRight="5px";I.onclick=function(){const t=Math.floor(d.value/1440),s=Math.floor((d.value-t*24*60)/60),r=Math.floor(d.value-(t*24*60+s*60)),o=Math.floor((d.value-(t*24*60+s*60+r))*60);L.textContent=`${t} дн.`,s>=10?y.textContent=`${s}:`:y.textContent=`0${s}:`,r>=10?p.textContent=`${r}:`:p.textContent=`0${r}:`,o>=10?h.textContent=`${o}`:h.textContent=`0${o}:`};
