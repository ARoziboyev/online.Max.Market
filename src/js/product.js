import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";



const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

document.addEventListener("DOMContentLoaded", () => {
  fetchData("https://dummyjson.com/products/" + id)
    .then((product) => {
      console.log(product);
      const img = document.querySelector("img");
      const brend = document.querySelector('#brend')
      const h2 = document.querySelector("h2");
      const h3 = document.querySelector("h3");
      const p = document.querySelector("p");
      const span1 = document.querySelector("#span1");
      const span2 = document.querySelector("#span2");
      const h4 = document.querySelector("h4");
      const h5 = document.querySelector('#h5')
      img.src = product.thumbnail;
      brend.textContent = product.brand      
      h2.textContent = product.title;
      h3.textContent = `Price: $${product.price}`;
      h5.textContent = `Bonus Price: $${product.discountPercentage}`
      p.textContent = product.description;
      span1.textContent = `id: ${product.id}`;
      span2.textContent = `id: ${product.id}`;
      h4.textContent = product.category;
      
      

    })
    .catch((error) => {
      console.log(error,"Xatolik");
      
    });
});

const html = document.documentElement;
const modeToggler = document.getElementById("mode-toggler");
const themeFromLocalStorage = localStorage.getItem("theme");
html.dataset.theme = themeFromLocalStorage || "light";

modeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dracula" : "light";
  localStorage.setItem("theme", html.dataset.theme);
});
