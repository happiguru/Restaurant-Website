function reservation(){
    const rem = document.querySelector(".section-one");
    rem.remove();

    const artsection = document.querySelector(".caption-title");
    const art = document.createElement('article');
    const heading1 = document.createElement('h1');
    const firstpara = document.createElement('p');
    const formm = document.createElement('form');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const input3 = document.createElement('input');

    // secondpara.classList.add("contactpage");
    formm.classList.add("formfield");
    art.classList.add("reserve");

    firstpara.textContent = "Please leave your number we will call to make a reservation!";
    heading1.textContent = "Make a booking";

    input1.setAttribute("type", 'text');
    input2.setAttribute("type", 'text');
    input3.setAttribute("type", 'submit');
    
    formm.append(input1, input2, input3);
    art.append(heading1, firstpara, formm);
    artsection.textContent = '';
    artsection.appendChild(art);
}

export default reservation;