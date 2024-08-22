"use strict";
const productList = document.querySelector(".product-list");

const products = [
  [
    {
      name: "Razer BlackWidow V3",
      price: 139.99,
      description:
        "A mechanical gaming keyboard with Razer Green switches and customizable RGB lighting.",
      category: "Gaming",
    },
    {
      name: "Logitech MX Keys",
      price: 119.99,
      description:
        "A wireless keyboard with backlit keys, designed for comfort and productivity.",
      category: "Productivity",
    },
    {
      name: "Corsair K95 RGB Platinum",
      price: 199.99,
      description:
        "High-performance mechanical keyboard with macro keys, RGB backlighting, and durable design.",
      category: "Gaming",
    },
    {
      name: "Microsoft Sculpt Ergonomic Keyboard",
      price: 129.99,
      description:
        "Ergonomically designed keyboard with a split layout and cushioned palm rest for comfort.",
      category: "Productivity",
    },
    {
      name: "SteelSeries Apex Pro",
      price: 179.99,
      description:
        "A mechanical gaming keyboard with customizable per-key RGB lighting and adjustable actuation switches.",
      category: "Gaming",
    },
    {
      name: "Keychron K6",
      price: 69.99,
      description:
        "Compact 65% wireless mechanical keyboard with hot-swappable keys and RGB backlighting.",
      category: "Productivity",
    },
    {
      name: "Ducky One 2 Mini",
      price: 109.99,
      description:
        "60% compact mechanical keyboard with Cherry MX switches and customizable RGB lighting.",
      category: "Gaming",
    },
    {
      name: "Apple Magic Keyboard",
      price: 99.99,
      description:
        "Sleek and minimalist keyboard with a low profile and rechargeable battery, designed for Mac.",
      category: "Productivity",
    },
    {
      name: "HyperX Alloy FPS Pro",
      price: 89.99,
      description:
        "Compact mechanical keyboard with Cherry MX switches and red LED backlighting, ideal for FPS gaming.",
      category: "Gaming",
    },
    {
      name: "Logitech Ergo K860",
      price: 129.99,
      description:
        "Ergonomic split keyboard with a curved design and cushioned palm rest to reduce strain.",
      category: "Productivity",
    },
  ],
  //   change the info for the rest of the objects
];
const productsBuilder = () => {
  products.forEach((product) => {
    const newLi = document.createElement("li");
    const keyboardName = document.createElement("p");
    const keyboardPrice = document.createElement("p");
    const keyboardDescription = document.createElement("p");
    const keyboardCategory = document.createElement("p");
    const keyboardAddToCart = document.createElement("button");

    keyboardName.classList.add("name");
    keyboardPrice.classList.add("price");
    keyboardDescription.classList.add("description");
    keyboardCategory.classList.add("category");
    keyboardAddToCart.classList.add("addToCart");

    keyboardName.textContent = product.name;
    keyboardPrice.textContent = product.price;
    keyboardDescription.textContent = product.description;
    keyboardCategory.textContent = product.category;
    keyboardAddToCart.textContent = product.addToCart;

    newLi.append(
      keyboardName,
      keyboardPrice,
      keyboardDescription,
      keyboardCategory,
      keyboardAddToCart
    );
    productList.append(newLi);
  });
};

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
