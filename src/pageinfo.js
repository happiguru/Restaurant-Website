function pageInfo(){
    const content = document.querySelector("#content");
    const text = document.createElement('div');

    const heading1 = document.createElement('h1');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    text.classList.add("text");
    p1.textContent = "This example use media queries to stack the topnav vertically when the screen size is 600px or less."

    text.appendChild(p1);
    content.append(text);
}

export default pageInfo;