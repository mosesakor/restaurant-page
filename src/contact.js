const nav_contact = () => {
  const render = () => {
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
  };
  return { render }
};

export { nav_contact }