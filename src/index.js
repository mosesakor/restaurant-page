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
    const contact = document.getElementById("contact");
    contact.onclick = function(e) {
      resetPage();
      render_contact();
    }
  }

  const addEventListeners = () => {
    home_nav();
    menu_nav();
    contact_nav();
  }
  return {render, addEventListeners};
}

const resetPage = () => {
  const content = document.getElementById("content")
  while(content.firstChild && content.removeChild(content.firstChild));
}

const render_home = () => {
  const content = document.getElementById("content");
  const description = document.createElement("p");
  description.textContent = "Everything we do is about you. From chefs who create exciting new flavors, to crew members who know exactly how you want your drink – we prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time."
  description.classList.add("description");
  content.appendChild(description);
}

const render_contact = () => {
  const content = document.getElementById("content");
  const info = document.createElement("p")
  const contact_info = document.createElement("ul");
  const phone = document.createElement("li");
  const email = document.createElement("li");
  const location = document.createElement("li");

  info.textContent = "Come eat at our place, you wouldn't regret it"
  phone.textContent = "Tel: 07911 123456"
  email.textContent = "Email: Jollyeats@jolly.zz"
  location.textContent = "Location: 10 Downing street"


  contact_info.appendChild(phone);
  contact_info.appendChild(email);
  contact_info.appendChild(location);

  content.appendChild(info);
  content.appendChild(contact_info);
}

const render_menu = () => {
  const content = document.getElementById("content");
  const menu = document.createElement("ul");
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  const item3 = document.createElement("li");
  const item4 = document.createElement("li");

  item1.textContent = "Proscuitto Salmon     $15";
  item2.textContent = "Chinese Fried Rice    £12";
  item3.textContent = "Butter Chicken Rice   £15";
  item4.textContent = "Briesd Beef Rice      £12";

  menu.appendChild(item1);
  menu.appendChild(item2);
  menu.appendChild(item3);
  menu.appendChild(item4);

  content.appendChild(menu);
}

const test = nav()
test.render();
test.addEventListeners();
render_home();