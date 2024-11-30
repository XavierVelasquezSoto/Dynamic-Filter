const productsElement = document.getElementById("products");

const productsCart = [
  {
    name: "Waffle with Berries",
    img: "./assets/img/image-waffle.jpg",
    price: 6.5,
    sugarless: true,
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    img: "./assets/img/image-creme-brulee.jpg",
    price: 7,
    sugarless: true,
  },
  {
    name: "Macaron Mix of Five",
    img: "./assets/img/image-macaron.jpg",
    price: 8,
    sugarless: false,
  },
  {
    name: "Classic Tiramisu",
    img: "./assets/img/image-tiramisu.jpg",
    price: 5.5,
    sugarless: false,
  },
  {
    name: "Pistachio Baklava",
    img: "./assets/img/image-baklava.jpg",
    price: 4,
    sugarless: true,
  },
  {
    name: "Lemon Meringue Pie",
    img: "./assets/img/image-meringue.jpg",
    price: 6.5,
    sugarless: true,
  },
  {
    name: "Red Velvet Cake",
    img: "./assets/img/image-cake.jpg",
    price: 4.5,
    sugarless: false,
  },
  {
    name: "Salted Caramel Brownie",
    img: "./assets/img/image-brownie.jpg",
    price: 5.5,
    sugarless: false,
  },
  {
    name: "Vanilla Panna Cotta",
    img: "./assets/img/image-panna-cotta.jpg",
    price: 6.5,
    sugarless: true,
  },
];

const newProducts = () => {
  fragment = document.createDocumentFragment();

  const newProduct = document.createElement("div");

  const newImgProduct = document.createElement("img");
  newImgProduct.src = `./assets/img/image-waffle.jpg`;

  const newSugarlessTittle = document.createElement("h2");
  newSugarlessTittle.classList.add("sugarlees-title");
  newSugarlessTittle.textContent = `Waffle with Berries`;

  const newSugarlessProduct = document.createElement("span");
  newSugarlessProduct.classList.add("sugarless-product");
  newSugarlessProduct.textContent = `Sugarless`;

  const newSugarlessPrice = document.createElement("span");
  newSugarlessPrice.classList.add("sugarless-price");
  newSugarlessPrice.textContent = `$6.50`;

  newProduct.append(
    newImgProduct,
    newSugarlessTittle,
    newSugarlessProduct,
    newSugarlessPrice
  );
  fragment.append(newProduct);
  productsElement.append(fragment);
};
newProducts();

// <div id="products" class="products">
//   <img src="./assets/img/image-waffle.jpg" alt="" />
//   <h2 class="sugarlees-title">Waffle with Berries</h2>
//   <span class="sugarless-product">Sugarless</span>
//   <span class="sugarless-price">$6.50</span>
// </div>;
