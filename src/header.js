function header() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  const ulist = document.createElement('ul');
  const caption = document.createElement('p');

  const list1 = document.createElement('li');
  const list2 = document.createElement('li');
  const list3 = document.createElement('li');
  const list4 = document.createElement('li');

  const anchor1 = document.createElement('a');
  const anchor2 = document.createElement('a');
  const anchor3 = document.createElement('a');
  const anchor4 = document.createElement('a');
  anchor1.href = './index.html';
  anchor2.href = '#';
  anchor3.href = '#';
  anchor4.href = '#';


  header.classList.add('main-header');
  navbar.classList.add('navbar');

  list1.classList.add('menu-link');
  list2.classList.add('menu-link1');
  list3.classList.add('menu-link2');
  list4.classList.add('menu-link3');

  caption.classList.add('caption-title');
  caption.textContent = 'Welcome To Restau Awesome';

  ulist.classList.add('menul');

  anchor1.textContent = 'About';
  anchor2.textContent = 'Menu';
  anchor3.textContent = 'Reservation';
  anchor4.textContent = 'Contact';

  list1.append(anchor1);
  list2.append(anchor2);
  list3.append(anchor3);
  list4.append(anchor4);

  ulist.append(list1, list2, list3, list4);
  navbar.append(ulist);
  header.append(navbar, caption);
  content.append(header);
}

export default header;