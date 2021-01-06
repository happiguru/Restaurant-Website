
function pageInfo() {
  const content = document.querySelector('#content');

  const section = document.createElement('section');
  const head2 = document.createElement('h2');
  const para = document.createElement('p');

  section.classList.add('section-one');

  head2.textContent = 'It is part of the ingredients that feels our Soul!';
  para.textContent = 'LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. A QUOS, VOLUPTATUM ILLUM MOLLITIA DOLORES LIBERO PLACEAT NESCIUNT QUASI ADIPISCI IMPEDIT!LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. A QUOS, VOLUPTATUM ILLUM MOLLITIA DOLORES LIBERO PLACEAT NESCIUNT QUASI ADIPISCI IMPEDIT! LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT. A QUOS, VOLUPTATUM ILLUM MOLLITIA DOLORES LIBERO PLACEAT NESCIUNT QUASI ADIPISCI IMPEDIT!LOREM IPSUM DOLOR SIT';

  section.append(head2, para);
  content.appendChild(section);
}

export default pageInfo;