/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


const contactPage = () => {
  const pageContent = document.querySelector("#page-content");
  pageContent.textContent = "";

  const contact = (0,_page__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", "contact");
  contact.innerHTML = `
  <div class="address">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-marker-radius</title>
      <path
        d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"
      />
    </svg>
    <p>Endereço: No seu coração</p>
  </div>
  <div class="phone">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>phone-dial</title>
      <path
        d="M6.6 10.8C8 13.6 10.4 15.9 13.2 17.4L15.4 15.2C15.7 14.9 16.1 14.8 16.4 15C17.5 15.4 18.7 15.6 20 15.6C20.6 15.6 21 16 21 16.6V20C21 20.6 20.6 21 20 21C10.6 21 3 13.4 3 4C3 3.4 3.5 3 4 3H7.5C8.1 3 8.5 3.4 8.5 4C8.5 5.2 8.7 6.4 9.1 7.6C9.2 7.9 9.1 8.3 8.9 8.6L6.6 10.8M14 3C13.4 3 13 3.4 13 4S13.4 5 14 5 15 4.6 15 4 14.6 3 14 3M17 3C16.4 3 16 3.4 16 4S16.4 5 17 5 18 4.6 18 4 17.6 3 17 3M20 3C19.4 3 19 3.4 19 4S19.4 5 20 5 21 4.6 21 4 20.6 3 20 3M14 6C13.4 6 13 6.4 13 7S13.4 8 14 8 15 7.6 15 7 14.6 6 14 6M17 6C16.4 6 16 6.4 16 7S16.4 8 17 8 18 7.6 18 7 17.6 6 17 6M20 6C19.4 6 19 6.4 19 7S19.4 8 20 8 21 7.6 21 7 20.6 6 20 6M14 9C13.4 9 13 9.4 13 10S13.4 11 14 11 15 10.6 15 10 14.6 9 14 9M17 9C16.4 9 16 9.4 16 10S16.4 11 17 11 18 10.6 18 10 17.6 9 17 9M20 9C19.4 9 19 9.4 19 10S19.4 11 20 11 21 10.6 21 10 20.6 9 20 9Z"
      />
    </svg>
    <p>Phone: +55(99) 2345 - meia78</p>
  </div>
  `;

  pageContent.appendChild(contact);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


const homePage = () => {
  const pageContent = document.querySelector("#page-content");
  pageContent.textContent = "";

  const home = (0,_page__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", "home");
  home.innerHTML = `
  <p>
    Venha Conhecer o sabor Brasileiro Servimos pratos deliciosos típicos
    de diversas regiões do Brasil
  </p>
  <button>Faça Sua Reserva</button>
  `;

  pageContent.appendChild(home);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");


const menuPage = () => {
  const pageContent = document.querySelector("#page-content");
  pageContent.textContent = "";

  const menu = (0,_page__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", "menu");

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

function createDish(img, name, description, price) {
  const dish = (0,_page__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)("div", "", ["dish"]);
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


/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMElement": () => (/* binding */ createDOMElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageModule);

function createDOMElement(
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





(0,_page__WEBPACK_IMPORTED_MODULE_0__["default"])();

(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

document.querySelector("#home-btn").addEventListener("click", () => {
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

document.querySelector("#menu-btn").addEventListener("click", () => {
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

document.querySelector("#contact-btn").addEventListener("click", () => {
  (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsdURBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmU7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHVEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCa0I7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHVEQUFnQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOztBQUV4QjtBQUNBLGVBQWUsdURBQWdCO0FBQy9CO0FBQ0EsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQSxVQUFVO0FBQ1Y7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7QUFFbkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDN0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDRjtBQUNBO0FBQ007O0FBRXBDLGlEQUFVOztBQUVWLGlEQUFROztBQUVSO0FBQ0EsRUFBRSxpREFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGlEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsb0RBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuICBwYWdlQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgY29udGFjdCA9IGNyZWF0ZURPTUVsZW1lbnQoXCJkaXZcIiwgXCJjb250YWN0XCIpO1xuICBjb250YWN0LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8dGl0bGU+bWFwLW1hcmtlci1yYWRpdXM8L3RpdGxlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMiwyQzE1LjMxLDIgMTgsNC42NiAxOCw3Ljk1QzE4LDEyLjQxIDEyLDE5IDEyLDE5QzEyLDE5IDYsMTIuNDEgNiw3Ljk1QzYsNC42NiA4LjY5LDIgMTIsMk0xMiw2QTIsMiAwIDAsMCAxMCw4QTIsMiAwIDAsMCAxMiwxMEEyLDIgMCAwLDAgMTQsOEEyLDIgMCAwLDAgMTIsNk0yMCwxOUMyMCwyMS4yMSAxNi40MiwyMyAxMiwyM0M3LjU4LDIzIDQsMjEuMjEgNCwxOUM0LDE3LjcxIDUuMjIsMTYuNTYgNy4xMSwxNS44M0w3Ljc1LDE2Ljc0QzYuNjcsMTcuMTkgNiwxNy44MSA2LDE4LjVDNiwxOS44OCA4LjY5LDIxIDEyLDIxQzE1LjMxLDIxIDE4LDE5Ljg4IDE4LDE4LjVDMTgsMTcuODEgMTcuMzMsMTcuMTkgMTYuMjUsMTYuNzRMMTYuODksMTUuODNDMTguNzgsMTYuNTYgMjAsMTcuNzEgMjAsMTlaXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICAgPHA+RW5kZXJlw6dvOiBObyBzZXUgY29yYcOnw6NvPC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInBob25lXCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHRpdGxlPnBob25lLWRpYWw8L3RpdGxlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk02LjYgMTAuOEM4IDEzLjYgMTAuNCAxNS45IDEzLjIgMTcuNEwxNS40IDE1LjJDMTUuNyAxNC45IDE2LjEgMTQuOCAxNi40IDE1QzE3LjUgMTUuNCAxOC43IDE1LjYgMjAgMTUuNkMyMC42IDE1LjYgMjEgMTYgMjEgMTYuNlYyMEMyMSAyMC42IDIwLjYgMjEgMjAgMjFDMTAuNiAyMSAzIDEzLjQgMyA0QzMgMy40IDMuNSAzIDQgM0g3LjVDOC4xIDMgOC41IDMuNCA4LjUgNEM4LjUgNS4yIDguNyA2LjQgOS4xIDcuNkM5LjIgNy45IDkuMSA4LjMgOC45IDguNkw2LjYgMTAuOE0xNCAzQzEzLjQgMyAxMyAzLjQgMTMgNFMxMy40IDUgMTQgNSAxNSA0LjYgMTUgNCAxNC42IDMgMTQgM00xNyAzQzE2LjQgMyAxNiAzLjQgMTYgNFMxNi40IDUgMTcgNSAxOCA0LjYgMTggNCAxNy42IDMgMTcgM00yMCAzQzE5LjQgMyAxOSAzLjQgMTkgNFMxOS40IDUgMjAgNSAyMSA0LjYgMjEgNCAyMC42IDMgMjAgM00xNCA2QzEzLjQgNiAxMyA2LjQgMTMgN1MxMy40IDggMTQgOCAxNSA3LjYgMTUgNyAxNC42IDYgMTQgNk0xNyA2QzE2LjQgNiAxNiA2LjQgMTYgN1MxNi40IDggMTcgOCAxOCA3LjYgMTggNyAxNy42IDYgMTcgNk0yMCA2QzE5LjQgNiAxOSA2LjQgMTkgN1MxOS40IDggMjAgOCAyMSA3LjYgMjEgNyAyMC42IDYgMjAgNk0xNCA5QzEzLjQgOSAxMyA5LjQgMTMgMTBTMTMuNCAxMSAxNCAxMSAxNSAxMC42IDE1IDEwIDE0LjYgOSAxNCA5TTE3IDlDMTYuNCA5IDE2IDkuNCAxNiAxMFMxNi40IDExIDE3IDExIDE4IDEwLjYgMTggMTAgMTcuNiA5IDE3IDlNMjAgOUMxOS40IDkgMTkgOS40IDE5IDEwUzE5LjQgMTEgMjAgMTEgMjEgMTAuNiAyMSAxMCAyMC42IDkgMjAgOVpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgICA8cD5QaG9uZTogKzU1KDk5KSAyMzQ1IC0gbWVpYTc4PC9wPlxuICA8L2Rpdj5cbiAgYDtcblxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlO1xuIiwiaW1wb3J0IHsgY3JlYXRlRE9NRWxlbWVudCB9IGZyb20gXCIuL3BhZ2VcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlLWNvbnRlbnRcIik7XG4gIHBhZ2VDb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBob21lID0gY3JlYXRlRE9NRWxlbWVudChcImRpdlwiLCBcImhvbWVcIik7XG4gIGhvbWUuaW5uZXJIVE1MID0gYFxuICA8cD5cbiAgICBWZW5oYSBDb25oZWNlciBvIHNhYm9yIEJyYXNpbGVpcm8gU2Vydmltb3MgcHJhdG9zIGRlbGljaW9zb3MgdMOtcGljb3NcbiAgICBkZSBkaXZlcnNhcyByZWdpw7VlcyBkbyBCcmFzaWxcbiAgPC9wPlxuICA8YnV0dG9uPkZhw6dhIFN1YSBSZXNlcnZhPC9idXR0b24+XG4gIGA7XG5cbiAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcbiIsImltcG9ydCB7IGNyZWF0ZURPTUVsZW1lbnQgfSBmcm9tIFwiLi9wYWdlXCI7XG5cbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZS1jb250ZW50XCIpO1xuICBwYWdlQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3QgbWVudSA9IGNyZWF0ZURPTUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51XCIpO1xuXG4gIGNvbnN0IGRpc2gxID0gY3JlYXRlRGlzaChcbiAgICBcIi9zcmMvaW1hZ2VzL2ZlaWpvYWRhLmpwZ1wiLFxuICAgIFwiRmVpam9hZGFcIixcbiAgICBcIlByYXRvIHTDrXBpY28gYnJhc2lsZWlybyBmYW1vc28gZW0gdG9kbyB0ZXJyaXTDs3JpbyBuYWNpb25hbCwgRmVpdG8gY29tIGZlaWrDo28gcHJldG8gZSBkaXZlcnNvcyB0aXBvcyBkZSBjYXJuZSwgYWNvbXBhbmhhbWVudG9zIGRlIGFycm96LCBjb3V2ZSwgdmluYWdyZXRlLCBsYXJhbmphIGUgZmFyb2ZhXCIsXG4gICAgXCJSJCAyOC45OVwiXG4gICk7XG5cbiAgY29uc3QgZGlzaDIgPSBjcmVhdGVEaXNoKFxuICAgIFwiL3NyYy9pbWFnZXMvcGljYW5oYS5qcGdcIixcbiAgICBcIlBpY2FuaGFcIixcbiAgICBcIk8gY29ydGUgZGUgY2FybmUgZGUgYm9pIG1haXMgZmFtb3NvIGRvIEJyYXNpbCwgZSB0YW1iw6ltIG8gbWFpcyBkZWxpY2lvc28sIGFjb21wYW5oYW1lbnRvcyBvcGNpb25haXMgZGUgYmF0YXRhLWZyaXRhLCBiYWNvbiBlIHNhbGFkYS5cIixcbiAgICBcIlIkIDM5Ljk5XCJcbiAgKTtcblxuICBjb25zdCBkaXNoMyA9IGNyZWF0ZURpc2goXG4gICAgXCIvc3JjL2ltYWdlcy9tb3F1ZWNhLmpwZ1wiLFxuICAgIFwiTW9xdWVjYVwiLFxuICAgIFwiUHJhdG8gdMOtcGljbyBkbyBOb3JkZXN0ZSBCcmFzaWxlaXJvLCB0ZW1vcyB2YXJpZWRhZGVzIGRlIHBlaXhlIGUgY2FtYXLDo28sIGFjb21hbmhhbWVudG9zIGRlIGZhcm9mYSwgYXJyb3osIGUgdHV0dSBkZSBmZWlqw6NvLlwiLFxuICAgIFwiUiQgMzQuOTlcIlxuICApO1xuXG4gIGNvbnN0IGRpc2g0ID0gY3JlYXRlRGlzaChcbiAgICBcIi9zcmMvaW1hZ2VzL3RhcGlvY2EuanBnXCIsXG4gICAgXCJUYXBpb2NhXCIsXG4gICAgXCJUZW1vcyBvcMOnw7VlcyBkZSByZWNoZWlvIGRvY2VzIGUgc2FsZ2FkYXMuXCIsXG4gICAgXCJSJCAyMC4wMFwiXG4gICk7XG5cbiAgY29uc3QgZGlzaDUgPSBjcmVhdGVEaXNoKFxuICAgIFwiL3NyYy9pbWFnZXMvcGFvLWRlLXF1ZWlqby5qcGdcIixcbiAgICBcIlDDo28gZGUgUXVlaWpvXCIsXG4gICAgXCJVc2FuZG8gcXVlaWpvIGF1dMOqbnRpY28gZG8gaW50ZXJpb3IgZGUgTWluYXMgR2VyYWlzLCBvIHNhYm9yIGUgYXJvbWEgZG9zIG5vc3NvcyBww6NlcyBkZSBxdWVpam8gc8OjbyBzZW0gaWd1YWwsIGNvbWJpbmEgYmVtIGNvbSB1bSBjYWbDqXppbmhvLlwiLFxuICAgIFwiUiQgNy45OVwiXG4gICk7XG5cbiAgY29uc3QgZGlzaDYgPSBjcmVhdGVEaXNoKFxuICAgIFwiL3NyYy9pbWFnZXMvY294aW5oYS5qcGdcIixcbiAgICBcIkNveGluaGFcIixcbiAgICBcIkNvbSBmb3JtYXRvIGUgc2Fib3IgaW5jb25mdW5kw612ZWwsIG5vc3NhIGNveGluaGEgdGVtIGEgbWFzc2EgY3JvY2FudGUgZSB1bSByZWNoZWlvIHF1ZSBkZXJyZXRlIG5hIGJvY2EuXCIsXG4gICAgXCJSJCA5Ljk5XCJcbiAgKTtcblxuICBjb25zdCBkaXNoNyA9IGNyZWF0ZURpc2goXG4gICAgXCIvc3JjL2ltYWdlcy9wdWRpbS5qcGdcIixcbiAgICBcIlB1ZGltIGRlIExlaXRlXCIsXG4gICAgXCJQdWRpbSBkZSBsZWl0ZSBjb25kZW5hZG8gcXVlIMOpIGEgY2FyYSBkbyBCcmFzaWwuXCIsXG4gICAgXCJSJCAxOS45OVwiXG4gICk7XG5cbiAgY29uc3QgZGlzaDggPSBjcmVhdGVEaXNoKFxuICAgIFwiL3NyYy9pbWFnZXMvQnJpZ2FkZWlyby5qcGdcIixcbiAgICBcIkJyaWdhZGVpcm9cIixcbiAgICBcIk8gZG9jaW5obyBtYWlzIGdvc3Rvc28gZG8gbXVuZG9cIixcbiAgICBcIlIkIDMuOTlcIlxuICApO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaDEpO1xuICBtZW51LmFwcGVuZENoaWxkKGRpc2gyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChkaXNoMyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaDQpO1xuICBtZW51LmFwcGVuZENoaWxkKGRpc2g1KTtcbiAgbWVudS5hcHBlbmRDaGlsZChkaXNoNik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaDcpO1xuICBtZW51LmFwcGVuZENoaWxkKGRpc2g4KTtcblxuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xuXG5mdW5jdGlvbiBjcmVhdGVEaXNoKGltZywgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gIGNvbnN0IGRpc2ggPSBjcmVhdGVET01FbGVtZW50KFwiZGl2XCIsIFwiXCIsIFtcImRpc2hcIl0pO1xuICBkaXNoLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIlwiIC8+XG4gICAgPGRpdiBjbGFzcz1cImRpc2gtZGVzY3JpcHRpb25cIj5cbiAgICAgIDxoMT4ke25hbWV9PC9oMT5cbiAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgJHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4ke3ByaWNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgcmV0dXJuIGRpc2g7XG59XG4iLCJjb25zdCBwYWdlTW9kdWxlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZURPTUVsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIik7XG4gIGNvbnN0IGxvZ28gPSBjcmVhdGVET01FbGVtZW50KFwiaW1nXCIpO1xuICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9zcmMvaW1hZ2VzL0xvZ28ucG5nXCIpO1xuICBsb2dvLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNvbWlkYSBCcmFzaWxlaXJhXCIpO1xuICBjb25zdCBsaW5rcyA9IGNyZWF0ZURPTUVsZW1lbnQoXCJ1bFwiKTtcblxuICBjb25zdCBob21lTGluayA9IGNyZWF0ZURPTUVsZW1lbnQoXCJhXCIsIFwiaG9tZS1idG5cIiwgW10sIFwiSW7DrWNpb1wiKTtcbiAgaG9tZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gIGNvbnN0IGhvbWVMaSA9IGNyZWF0ZURPTUVsZW1lbnQoXCJsaVwiKTtcbiAgaG9tZUxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcblxuICBjb25zdCBtZW51TGluayA9IGNyZWF0ZURPTUVsZW1lbnQoXCJhXCIsIFwibWVudS1idG5cIiwgW10sIFwiTWVudVwiKTtcbiAgbWVudUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gIGNvbnN0IG1lbnVMaSA9IGNyZWF0ZURPTUVsZW1lbnQoXCJsaVwiKTtcbiAgbWVudUxpLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcblxuICBjb25zdCBjb250YWN0TGluayA9IGNyZWF0ZURPTUVsZW1lbnQoXCJhXCIsIFwiY29udGFjdC1idG5cIiwgW10sIFwiQ29udGF0b1wiKTtcbiAgY29udGFjdExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gIGNvbnN0IGNvbnRhY3RMaSA9IGNyZWF0ZURPTUVsZW1lbnQoXCJsaVwiKTtcbiAgY29udGFjdExpLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuICBsaW5rcy5hcHBlbmRDaGlsZChob21lTGkpO1xuICBsaW5rcy5hcHBlbmRDaGlsZChtZW51TGkpO1xuICBsaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGkpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxpbmtzKTtcblxuICBjb25zdCBwYWdlQ29udGVudCA9IGNyZWF0ZURPTUVsZW1lbnQoXCJkaXZcIiwgXCJwYWdlLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRE9NRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFwiZm9vdGVyXCIsXG4gICAgW10sXG4gICAgXCJDcmlhZG8gcG9yIEpvbmF0aGFuIExvcGVzXCJcbiAgKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlTW9kdWxlO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudChcbiAgdHlwZSxcbiAgaWQgPSBcIlwiLFxuICBjbGFzc0xpc3QgPSBbXSxcbiAgdGV4dENvbnRlbnQgPSBcIlwiXG4pIHtcbiAgaWYgKCF0eXBlKSByZXR1cm47XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGlkKSBlbGVtZW50LmlkID0gaWQ7XG4gIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VNb2R1bGUgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5wYWdlTW9kdWxlKCk7XG5cbmhvbWVQYWdlKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaG9tZVBhZ2UoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1lbnVQYWdlKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250YWN0UGFnZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=