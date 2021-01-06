function footer() {
  const content = document.querySelector('#content');

  const footer = document.createElement('footer');
  const footerdiv = document.createElement('div');
  const courtesey = document.createElement('div');
  const article1 = document.createElement('article');
  const article2 = document.createElement('article');
  const article3 = document.createElement('article');
  const h1 = document.createElement('h3');
  const h2 = document.createElement('h3');
  const h3 = document.createElement('h3');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');
  const para3 = document.createElement('p');
  const para4 = document.createElement('p');
  const formm = document.createElement('form');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  const span5 = document.createElement('span');
  const span6 = document.createElement('span');

  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const input3 = document.createElement('input');

  footerdiv.classList.add('d-flex');
  article1.classList.add('form');
  article2.classList.add('opening');
  article3.classList.add('contact');
  formm.classList.add('formfield');
  courtesey.classList.add('courtesy');

  h1.textContent = 'Make a booking';
  h2.textContent = 'Opening Timings';
  h3.textContent = 'Contact Us';
  para1.textContent = 'Please leave your number we will call to make a reservation';
  para4.textContent = 'Designed by Stanley Enow';
  span1.textContent = 'Monday—Thursday: 08:00 — 22:00';
  span2.textContent = 'Friday—Saturday: 09:00 — 23:00';
  span3.textContent = 'Sunday: 10:00 — 17:00';
  span4.textContent = '410-602-8008';
  span5.textContent = '15 Florida Ave';
  span6.textContent = 'Palo-Alto, 1111 CA';

  para2.append(span1, span2, span3);
  para3.append(span4, span5, span6);
  input1.setAttribute('type', 'text');
  input2.setAttribute('type', 'text');
  input3.setAttribute('type', 'submit');

  formm.append(input1, input2, input3);
  article1.append(h1, para1, formm);
  article2.append(h2, para2);
  article3.append(h3, para3);
  footerdiv.append(article1, article2, article3);
  courtesey.appendChild(para4);
  footer.append(footerdiv, courtesey);
  content.appendChild(footer);
}

export default footer;