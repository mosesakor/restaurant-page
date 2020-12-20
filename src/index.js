import _ from 'lodash';

const nav = () => {

  const render = () => {
    const nav_bar = document.getElementById("nav");
    const nav = document.createElement("ul");
    const home_link = document.createElement("li");
    const menu_link = document.createElement("li");
    const contact_link = document.createElement("li");

    const home_anchor = document.createElement("a");
    const menu_anchor = document.createElement("a");
    const contact_anchor = document.createElement("a");
    
    home_anchor.id ="home"
    menu_anchor.id = "menu"
    contact_anchor.id = "contact"

    home_anchor.textContent = "Home";
    menu_anchor.textContent = "Menu";
    contact_anchor.textContent = "Contact";

    home_link.appendChild(home_anchor);
    menu_link.appendChild(menu_anchor);
    contact_link.appendChild(contact_anchor);
  
    nav.appendChild(home_link);
    nav.appendChild(menu_link);
    nav.appendChild(contact_link);
  
    nav_bar.appendChild(nav);
  };

  const home_nav = () => {
    const home = document.getElementById("home");
    home.onclick = function(e) {
      resetPage();
      render_home();
    }
  }

  const menu_nav = () => {
    const menu = document.getElementById("menu");
    menu.onclick = function(e) {
      resetPage();
      render_menu();
    }
  }

  const contact_nav = () => {
    const contact = document.getElementById("home");
    contact.onclick = function(e) {
      resetPage();
      render_contact();
    }
  }
  return {render};
}

const resetPage = () => {
  const content = document.getElementById("content")
  while(content.firstChild && content.removeChild(content.firstChild));
}

const render_home = () => {
  const content = document.getElementById("content")
  const description = document.createElement("p");
  description.textContent = "Everything we do is about you. From chefs who create exciting new flavors, to crew members who know exactly how you want your drink – we prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time."
  description.classList.add("description");
  content.appendChild(description);
}

const test = nav()
test.render();
render_home();