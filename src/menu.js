const nav_menu = () => {
  const render = () => {
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
  return {render};
};

export { nav_menu }