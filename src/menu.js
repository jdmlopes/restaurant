import { createDOMElement } from "./page";

const menuPage = () => {
  const pageContent = document.querySelector("#page-content");
  pageContent.textContent = "";

  const menu = createDOMElement("div", "menu");

  const dish1 = createDish(
    "/src/images/feijoada.jpg",
    "Feijoada",
    "Prato típico brasileiro famoso em todo território nacional, Feito com feijão preto e diversos tipos de carne, acompanhamentos de arroz, couve, vinagrete, laranja e farofa",
    "R$ 28.99"
  );

  const dish2 = createDish(
    "/src/images/picanha.jpg",
    "Picanha",
    "O corte de carne de boi mais famoso do Brasil, e também o mais delicioso, acompanhamentos opcionais de batata-frita, bacon e salada.",
    "R$ 39.99"
  );

  const dish3 = createDish(
    "/src/images/moqueca.jpg",
    "Moqueca",
    "Prato típico do Nordeste Brasileiro, temos variedades de peixe e camarão, acomanhamentos de farofa, arroz, e tutu de feijão.",
    "R$ 34.99"
  );

  const dish4 = createDish(
    "/src/images/tapioca.jpg",
    "Tapioca",
    "Temos opções de recheio doces e salgadas.",
    "R$ 20.00"
  );

  const dish5 = createDish(
    "/src/images/pao-de-queijo.jpg",
    "Pão de Queijo",
    "Usando queijo autêntico do interior de Minas Gerais, o sabor e aroma dos nossos pães de queijo são sem igual, combina bem com um cafézinho.",
    "R$ 7.99"
  );

  const dish6 = createDish(
    "/src/images/coxinha.jpg",
    "Coxinha",
    "Com formato e sabor inconfundível, nossa coxinha tem a massa crocante e um recheio que derrete na boca.",
    "R$ 9.99"
  );

  const dish7 = createDish(
    "/src/images/pudim.jpg",
    "Pudim de Leite",
    "Pudim de leite condenado que é a cara do Brasil.",
    "R$ 19.99"
  );

  const dish8 = createDish(
    "/src/images/Brigadeiro.jpg",
    "Brigadeiro",
    "O docinho mais gostoso do mundo",
    "R$ 3.99"
  );

  menu.appendChild(dish1);
  menu.appendChild(dish2);
  menu.appendChild(dish3);
  menu.appendChild(dish4);
  menu.appendChild(dish5);
  menu.appendChild(dish6);
  menu.appendChild(dish7);
  menu.appendChild(dish8);

  pageContent.appendChild(menu);
};

export default menuPage;

function createDish(img, name, description, price) {
  const dish = createDOMElement("div", "", ["dish"]);
  dish.innerHTML = `
    <img src="${img}" alt="" />
    <div class="dish-description">
      <h1>${name}</h1>
      <p class="description">
        ${description}
      </p>
      <p class="price">${price}</p>
    </div>
  `;
  return dish;
}
