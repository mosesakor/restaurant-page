const nav_home = () => {
  const render = () => {
    const content = document.getElementById("content");
    const description = document.createElement("p");
    description.textContent = "Everything we do is about you. From chefs who create exciting new flavors, to crew members who know exactly how you want your drink – we prioritize what you need to get you on your way. We strive to keep you at your best, and we remain loyal to you, your tastes and your time."
    description.classList.add("description");
    content.appendChild(description);
  }
  return { render };
};

export { nav_home }