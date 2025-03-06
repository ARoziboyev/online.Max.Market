const template = document.querySelector("template");
const cardList = document.getElementById("card-list");

const showCards = ({ products }) => {
  products.forEach((product) => {
    const {
      id,
      title,
      thumbnail,
      price,
      discountPercentage,
      rating,
      description,
      reviews,
    } = product;

    const clone = template.content.cloneNode(true);

    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const descriptionText = clone.querySelector(".description");
    const ratingText = clone.querySelector(".rating");
    const reviewText = clone.querySelector(".review");
    const priceText = clone.querySelector(".price");
    const priceWithDiscount = clone.querySelector(".price-with-discount");
    const buyBtn = document.querySelector(".buy-btn");

    a.href = `./product.html?id=${product.id}`;

    img.src = thumbnail;
    img.alt = title;

    descriptionText.textContent = description;

    ratingText.textContent = rating;

    priceText.textContent = `$${price}`;
    priceWithDiscount.textContent = `$${(price - (price / 100) * discountPercentage).toFixed(2)}`;

    reviewText.textContent = `${reviews.length} Reviews`;

    cardList.appendChild(clone);
  });
};
  
const showProduct = (product)=>{
  console.log(product);  
}
export { showCards, showProduct}