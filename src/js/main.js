import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/product?limit=194")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });




  const inputSearch = document.getElementById("inputSearch");
const cardList = document.getElementById("card-list");
const cartIndicator = document.getElementById("indicator-item");
const cartButton = document.querySelector(".btn-ghost");

inputSearch.addEventListener("input", async (e) => {
  const searchValue = e.target.value.trim();
  if (searchValue !== "") {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const filteredProducts = data.products.filter(product => 
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      cardList.innerHTML = "";
      
      filteredProducts.concat(
        data.products.filter(product => !filteredProducts.includes(product))
      ).forEach(product => {
        const card = document.createElement("div");
        card.innerHTML = `<a <a href="./product.html?id=${product.id}"> class="card bg-base-100 w-full shadow-sm group">
                            <figure>
                              <img class="group-hover:scale-[1.2] transition duration-300" src="${product.thumbnail}" alt="${product.title}" />
                            </figure>
                            <div class="card-body">
                              <p class="description line-clamp-2">${product.description}</p>
                              <p>
                                <i class="fa-solid fa-star text-orange-400"></i>
                                <span class="rating">${product.rating}</span>
                              </p>
                              <div class="flex justify-between">
                                <div class="flex flex-col gap-1">
                                  <h3 class="price-with-discount badge badge-primary font-bold">$${product.price}</h3>
                                </div>
                                <button id="cart-plus" class="buy-btn btn hover:btn-primary z-10 self-end rounded-full">
                                  <i class="fa-solid fa-cart-plus text-xl"></i>
                                </button>
                              </div>
                            </div>
                          </a>`;

        card.querySelector("#cart-plus").addEventListener("click", () => {
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(`${product.title} savatchaga qo'shildi!`);
          cartIndicator.textContent = cart.length;
        });

        cardList.appendChild(card);
      });

    } catch (error) {
      console.error(error);
    }
  }
});

cartButton.addEventListener("click", () => {
  window.location.href = "./product.html";
});

window.addEventListener("load", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartIndicator.textContent = cart.length;
  const productList = document.getElementById("card-list");
  if (productList && cart.length > 0) {
    productList.innerHTML = "";
    cart.forEach(product => {
      const item = `<div class="card bg-base-100 w-full shadow-sm">
                      <figure>
                        <img src="${product.thumbnail}" alt="${product.title}" />
                      </figure>
                      <div class="card-body">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p class="badge badge-primary">$${product.price}</p>
                      </div>
                    </div>`;
      productList.innerHTML += item;
    });
  }
});
