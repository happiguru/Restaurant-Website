function menu(){
    const rem = document.querySelector(".section-one");
    rem.remove();

    const artsection = document.querySelector(".caption-title");
    const art = document.createElement('article');
    const heading1 = document.createElement('h1');
    const firstpara = document.createElement('p');
    const secondpara = document.createElement('p');

    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    secondpara.classList.add("menulist");
    art.classList.add("reserve");
    firstpara.textContent = "Please choose your favorite meal from the menu list!";
    heading1.textContent = "Our Menu";
    span1.textContent = "Dessert: Spannish Salade";
    span2.textContent = "Pizza: Italian Pizza";
    span3.textContent = "KFC: Kentucky Fried Chicken";
    
    secondpara.append(span1, span2, span3);
    art.append(heading1, firstpara, secondpara);
    artsection.textContent = '';
    artsection.appendChild(art);
}

export default menu;