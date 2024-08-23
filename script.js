"use strict";
const productList = document.querySelector(".product-list");

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
//   change the info for the rest of the objects;
const productsBuilder = () => {
  products.forEach((product) => {
    const newLi = document.createElement("li");
    const keyboardImage = document.createElement("img");
    const keyboardName = document.createElement("p");
    const keyboardPrice = document.createElement("p");
    const keyboardDescription = document.createElement("p");
    const keyboardCategory = document.createElement("p");
    const keyboardAddToCart = document.createElement("button");

    keyboardImage.src = product.image;

    keyboardImage.classList.add("image");
    keyboardName.classList.add("name");
    keyboardPrice.classList.add("price");
    keyboardDescription.classList.add("description");
    keyboardCategory.classList.add("category");
    keyboardAddToCart.classList.add("addToCart");

    // keyboardImage.textContent = product.image;
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
// dsadsad
// make an unordered list inside of product list
// then make list items inside of the UL

// this is the list item i need to make in js
// <div class="1">
//     <!-- <img> -->
//     <button>Add to Cart</button>
//     <h2></h2>
//     <p></p>
//     <p></p>
//   </div>

// need to make a forEachloop for a specified amount of time

// array [products{}]
productsBuilder();
