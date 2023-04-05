const pageModule = () => {
  const content = document.querySelector("#content");

  const header = createDOMElement("div", "header");
  const logo = createDOMElement("img");
  logo.setAttribute("src", "/src/images/Logo.png");
  logo.setAttribute("alt", "Comida Brasileira");
  const links = createDOMElement("ul");

  const homeLink = createDOMElement("a", "home-btn", [], "Início");
  homeLink.setAttribute("href", "#");
  const homeLi = createDOMElement("li");
  homeLi.appendChild(homeLink);

  const menuLink = createDOMElement("a", "menu-btn", [], "Menu");
  menuLink.setAttribute("href", "#");
  const menuLi = createDOMElement("li");
  menuLi.appendChild(menuLink);

  const contactLink = createDOMElement("a", "contact-btn", [], "Contato");
  contactLink.setAttribute("href", "#");
  const contactLi = createDOMElement("li");
  contactLi.appendChild(contactLink);

  links.appendChild(homeLi);
  links.appendChild(menuLi);
  links.appendChild(contactLi);

  header.appendChild(logo);
  header.appendChild(links);

  const pageContent = createDOMElement("div", "page-content");

  const footer = createDOMElement(
    "div",
    "footer",
    [],
    "Criado por Jonathan Lopes"
  );

  content.appendChild(header);
  content.appendChild(pageContent);
  content.appendChild(footer);
};

export default pageModule;

export function createDOMElement(
  type,
  id = "",
  classList = [],
  textContent = ""
) {
  if (!type) return;
  let element = document.createElement(type);
  if (id) element.id = id;
  for (const className of classList) {
    element.classList.add(className);
  }
  if (textContent) element.textContent = textContent;
  return element;
}
