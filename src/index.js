import header from "./header"
import about from "./about"
import menu from "./menu"
import contact from "./contact"
import pageInfo  from "./pageinfo"

header();
pageInfo();

const content = document.querySelector("#content");
const list1 = document.querySelector('.menu-link');
const list2 = document.querySelector('.menu-link1');
const list3 = document.querySelector('.menu-link2');
const list4 = document.querySelector('.menu-link3');

list1.classList.add("selected");

list1.addEventListener('click', ()=>{
    list1.classList.add("selected");
    list2.classList.remove("selected");
    list3.classList.remove("selected");
    list4.classList.remove("selected");
    content.removeChild(content.lastChild);
    header();
});

list2.addEventListener('click', ()=>{
    list2.classList.add("selected");
    list1.classList.remove("selected");
    list3.classList.remove("selected");
    list4.classList.remove("selected");
    content.removeChild(content.lastChild);
    about();
});

list1.addEventListener('click', ()=>{
    list1.classList.remove("selected");
    list2.classList.remove("selected");
    list3.classList.add("selected");
    list4.classList.remove("selected");
    content.removeChild(content.lastChild);
    menu();
});

list1.addEventListener('click', ()=>{
    list1.classList.remove("selected");
    list2.classList.remove("selected");
    list3.classList.remove("selected");
    list4.classList.add("selected");
    content.removeChild(content.lastChild);
    contact();
});
