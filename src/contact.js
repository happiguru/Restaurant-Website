function contact() {
  const rem = document.querySelector('.section-one');
  rem.remove();

  const artsection = document.querySelector('.caption-title');
  const art = document.createElement('article');
  const heading1 = document.createElement('h1');
  const firstpara = document.createElement('p');
  const secondpara = document.createElement('p');

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');

  secondpara.classList.add('contactpage');
  art.classList.add('reserve');

  firstpara.textContent = 'We are always please to welcome you!';
  heading1.textContent = 'Contact Us';
  span1.textContent = '410-602-8008';
  span2.textContent = '15 Florida Ave';
  span3.textContent = 'Palo-Alto, 1111 CA';

  secondpara.append(span1, span2, span3);
  art.append(heading1, firstpara, secondpara);
  artsection.textContent = '';
  artsection.appendChild(art);
}

export default contact;