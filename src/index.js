import pageModule from "./page";
import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

pageModule();

homePage();

document.querySelector("#home-btn").addEventListener("click", () => {
  homePage();
});

document.querySelector("#menu-btn").addEventListener("click", () => {
  menuPage();
});

document.querySelector("#contact-btn").addEventListener("click", () => {
  contactPage();
});
