function header(){
    const content = document.querySelector("#content");
   // const navbar = document.createElement('nav');
    const ulist = document.createElement('ul');

    const list1 = document.createElement('li');
    const list2 = document.createElement('li');
    const list3 = document.createElement('li');
    const list4 = document.createElement('li');

    list1.classList.add("menu-link");
    list2.classList.add("menu-link1");
    list3.classList.add("menu-link2");
    list4.classList.add("menu-link3");

    ulist.classList.add("topnav");

    list1.textContent = "Home";
    list2.textContent = "About";
    list3.textContent = "Menu";
    list4.textContent = "Contact";

    ulist.append(list1, list2, list3, list4);
    content.append(ulist);
}

export default header;