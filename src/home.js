import { createDOMElement } from "./page";

const homePage = () => {
  const pageContent = document.querySelector("#page-content");
  pageContent.textContent = "";

  const home = createDOMElement("div", "home");
  home.innerHTML = `
  <p>
    Venha Conhecer o sabor Brasileiro Servimos pratos deliciosos típicos
    de diversas regiões do Brasil
  </p>
  <button>Faça Sua Reserva</button>
  `;

  pageContent.appendChild(home);
};

export default homePage;
