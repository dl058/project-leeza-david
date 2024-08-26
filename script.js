"use strict";
const productList = document.querySelector(".product-list");
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const listCart = document.querySelector(".listCart");
const body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
const cartContainer = document.querySelector(".cart-container");
let runningTotal = 0;
let cart = [];

// create an eventListener to the add to cart button being clicked,
// when its clicked, push object to the cart
// js cart will build an HTML list
const products = [
  {
    image: "images/black.avif",
    name: "Joe's Signature Keyboard",
    price: 199.99,
    description:
      "Joe's Signature 75% Keyboard is the culmination of modern keyboard design, with a little disruption thrown in for good measure. The dial top right can adjust to any needs, such as changing the volume, or skipping videos.",
    category: "75%",
  },
  {
    image: "images/blueJ.avif",
    name: "Joe's Signature Keyboard Blue Edition",
    price: 249.99,
    description:
      "Joe's Signature 75% Keyboard Blue Edition is deep blue. Elsewhere, dark grays and golden accents add welcome contrast, while matching golden legends complete the look. Sculpted in Cherry profile",
    category: "75%",
  },
  {
    image: "images/frost.avif",
    name: "Joe's Signature Keyboard Snow Edition",
    price: 249.99,
    description:
      "Joe's Signature 75% Keyboard Snow Edition. Designed for both aesthetics and performance, this compact yet full-featured keyboard offers a balance between style and functionality.",
    category: "75%",
  },
  {
    image: "images/emerald.avif",
    name: "Emerald Garden Keyboard",
    price: 249.99,
    description:
      "Immerse yourself in a lush, verdant typing experience with the Emerald Garden Keyboard. Designed to blend elegance with functionality, this keyboard stands out with its unique and sophisticated design elements.",
    category: "80%",
  },
  {
    image: "images/paint.avif",
    name: "Paint Splatter Keyboard",
    price: 249.99,
    description:
      "Add a splash of creativity to your workspace with the Paint Splatter Keyboard. This vibrant and artistic keyboard design is perfect for those who appreciate bold aesthetics and want to make a statement with their tech accessories.",
    category: "80%",
  },
  {
    image: "images/rainbow.avif",
    name: "Chromatic RGB Keyboard",
    price: 299.99,
    description:
      "Elevate your typing experience with the Chromatic RGB Keyboard, designed to offer a stunning visual experience alongside high-performance functionality. This keyboard is perfect for those who love to blend vibrant aesthetics with top-notch features.",
    category: "65%",
  },
  {
    image: "images/rgbSilver.avif",
    name: "Silver RBG Keyboard",
    price: 249.99,
    description:
      "Elevate your typing experience with the Silver RGB Keyboard, a masterful fusion of sleek aesthetics and cutting-edge technology. Designed to complement any modern workspace, this keyboard combines understated elegance with vibrant, customizable lighting.",
    category: "65%",
  },
  {
    image: "images/redJ.avif",
    name: "Red Samurai Keyboard",
    price: 199.99,
    description:
      "Embrace the spirit of precision and elegance with the Red Samurai Keyboard. Designed to capture the essence of traditional Japanese aesthetics while delivering high-performance functionality, this keyboard is a blend of form and function that stands out in any setup.",
    category: "65%",
  },

  {
    image: "images/sapphire.avif",
    name: "Sapphire Keyboard",
    price: 199.99,
    description:
      "Unveil a touch of elegance and high performance with the Sapphire Keyboard. Designed to combine sophistication with functionality, this keyboard brings a refined aesthetic and advanced features to your workspace.",
    category: "65%",
  },
  {
    image: "images/snow.avif",
    name: "Frost Keyboard",
    price: 199.99,
    description:
      "Experience the cool elegance and high performance of the Frost Keyboard. Inspired by the serene and refreshing beauty of winter, this keyboard combines a crisp, frosty design with advanced functionality to elevate your typing and gaming experience.",
    category: "65%",
  },
];
const cartBuilder = () => {
  // clear cart (HTML)
  const listItemsToDelete = document.querySelectorAll(".cartListItem");
  listItemsToDelete.forEach((item) => {
    item.remove();
  });
  // then, rebuild:
  cart.forEach((product, index) => {
    const cartImage = document.createElement("img");
    const cartProductName = document.createElement("p");
    const cartProductPrice = document.createElement("p");
    const cartItem = document.createElement("li");
    const removeFromCart = document.createElement("button");
    removeFromCart.textContent = "Remove Item";
    removeFromCart.classList.add("removeFromCart");
    removeFromCart.setAttribute("data-index", index);
    cartItem.classList.add("cartListItem");
    cartImage.src = product.image;
    cartImage.classList.add("image");
    cartProductName.classList.add("name");
    cartProductPrice.classList.add("price");
    cartItem.append(
      cartImage,
      cartProductName,
      cartProductPrice,
      removeFromCart
    );
    listCart.append(cartItem);

    cartProductName.textContent = product.name;
    cartProductPrice.textContent = `$${product.price.toFixed(2)}`;
  });
};

const productsBuilder = () => {
  products.forEach((product, index) => {
    const newLi = document.createElement("li");
    const keyboardImage = document.createElement("img");
    const keyboardName = document.createElement("p");
    const keyboardPrice = document.createElement("p");
    const keyboardDescription = document.createElement("p");
    const keyboardCategory = document.createElement("p");
    const keyboardAddToCart = document.createElement("button");
    keyboardAddToCart.setAttribute("data-index", index);

    keyboardImage.src = product.image;
    keyboardImage.classList.add("image");
    keyboardName.classList.add("name");
    keyboardPrice.classList.add("price");
    keyboardDescription.classList.add("description");
    keyboardCategory.classList.add("category");
    keyboardAddToCart.classList.add("addToCart");
    keyboardName.textContent = product.name;
    keyboardPrice.textContent = `$${product.price.toFixed(2)}`;
    keyboardDescription.textContent = product.description;
    keyboardCategory.textContent = product.category;
    keyboardAddToCart.textContent = "Add to Cart";

    newLi.append(
      keyboardImage,
      keyboardName,
      keyboardPrice,
      keyboardDescription,
      keyboardCategory,
      keyboardAddToCart
    );
    productList.append(newLi);
  });
};

productsBuilder();

openShopping.addEventListener("click", () => {
  body.classList.add("active");
  cartBuilder();
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

cartContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeFromCart")) {
    console.log("removed");
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    console.log(cart);
    console.dir(e.target);
    // this is the number in string format so far. vv
    e.target.previousElementSibling.innerText;
    runningTotal -= parseFloat(
      e.target.previousElementSibling.innerText.slice(1)
    );

    e.target.parentNode.remove();
    console.log(runningTotal);
  }
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    // console.log("add to cart button was clicked");
    const index = e.target.getAttribute("data-index");
    cart.push(products[index]);
    runningTotal = runningTotal + parseFloat(products[index].price);
    // console.log(runningTotal);
    // console.log(cart);
    // console.log(cart.length);
    const quantitySpan = document.querySelector(".quantity");
    quantitySpan.textContent = cart.length;

    const taxRate = 1.06;
    let taxedTotal = runningTotal * taxRate;
    total.textContent = `Total: ${taxedTotal.toFixed(2)}`;
    console.log(taxedTotal);
  }
});
// GO BACK TO TAXED TOTAL N FIX LATER
// taxes
// remove func n button
// checkout func n button
// inputs for card payment
