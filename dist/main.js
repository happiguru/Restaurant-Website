(()=>{"use strict";const e=function(){const e=document.querySelector("#content"),t=document.createElement("ul"),s=document.createElement("li"),c=document.createElement("li"),l=document.createElement("li"),n=document.createElement("li");s.classList.add("menu-link"),c.classList.add("menu-link1"),l.classList.add("menu-link2"),n.classList.add("menu-link3"),t.classList.add("topnav"),s.textContent="Home",c.textContent="About",l.textContent="Menu",n.textContent="Contact",t.append(s,c,l,n),e.append(t)};e(),function(){const e=document.querySelector("#content"),t=document.createElement("div"),s=(document.createElement("h1"),document.createElement("p"));document.createElement("p"),t.classList.add("text"),s.textContent="This example use media queries to stack the topnav vertically when the screen size is 600px or less.",t.appendChild(s),e.append(t)}();const t=document.querySelector("#content"),s=document.querySelector(".menu-link"),c=document.querySelector(".menu-link1"),l=document.querySelector(".menu-link2"),n=document.querySelector(".menu-link3");s.classList.add("selected"),s.addEventListener("click",(()=>{s.classList.add("selected"),c.classList.remove("selected"),l.classList.remove("selected"),n.classList.remove("selected"),t.removeChild(t.lastChild),e()})),c.addEventListener("click",(()=>{c.classList.add("selected"),s.classList.remove("selected"),l.classList.remove("selected"),n.classList.remove("selected"),t.removeChild(t.lastChild)})),s.addEventListener("click",(()=>{s.classList.remove("selected"),c.classList.remove("selected"),l.classList.add("selected"),n.classList.remove("selected"),t.removeChild(t.lastChild)})),s.addEventListener("click",(()=>{s.classList.remove("selected"),c.classList.remove("selected"),l.classList.remove("selected"),n.classList.add("selected"),t.removeChild(t.lastChild)}))})();