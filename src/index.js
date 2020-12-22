import _ from 'lodash';
import { nav_home } from './home.js';
import { nav_menu } from './menu.js';
import { nav_contact } from './contact.js';

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
    
    home_anchor.id ="home";
    menu_anchor.id = "menu";
    contact_anchor.id = "contact";

    home_anchor.classList.add('active');
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
    const home = nav_home();
    home.render();
  }

  const clearPreviousActiveTab = () => {
    let tabs = document.querySelectorAll('.active');
    tabs.forEach((tab) => { tab.classList.remove('active') });
  }

  const home_nav = () => {
    const home = document.getElementById("home");

    home.onclick = () => {
      clearPreviousActiveTab();
      home.classList.add('active');
      resetPage();
      const nav_h = nav_home()
      nav_h.render();
    }
  }

  const menu_nav = () => {
    const menu = document.getElementById("menu");

    menu.onclick = () => {
      clearPreviousActiveTab();
      menu.classList.add('active')
      resetPage();
      const nav_m = nav_menu()
      nav_m.render();
    }
  }

  const contact_nav = () => {
    const contact = document.getElementById("contact");

    contact.onclick = () => {
      clearPreviousActiveTab();
      contact.classList.add('active')
      resetPage();
      const nav_c = nav_contact()
      nav_c.render();
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
  const content = document.getElementById("content");
  while(content.firstChild && content.removeChild(content.firstChild));
}

const test = nav()
test.render();
test.addEventListeners();