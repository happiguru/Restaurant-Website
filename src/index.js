import header from './header';
import reservation from './reservation';
import menu from './menu';
import contact from './contact';
import pageInfo from './pageinfo';
import footer from './footer';

window.addEventListener('load', () => {
  function initApp() {
    const menulinkone = document.querySelector('.menu-link1');
    const menulinktwo = document.querySelector('.menu-link2');
    const menulinkthree = document.querySelector('.menu-link3');

    menulinkone.addEventListener('click', menu);
    menulinktwo.addEventListener('click', reservation);
    menulinkthree.addEventListener('click', contact);
  }

  header();
  pageInfo();
  footer();
  initApp();
});
