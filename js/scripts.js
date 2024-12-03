const productsElement = document.getElementById("products");

const amountTextElement = document.getElementById("amount-text"); // filter products

const noProductsElement = document.getElementById("no-products");

const sugarlessCheckboxElement = document.getElementById("sugarless-checkbox"); //checkbox products

const orderSelectElement = document.getElementById("order-select"); // order products

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

const noProducts = (verifyProduct) => {
  if (verifyProduct === 0) {
    noProductsElement.classList.remove("hide");
  } else {
    noProductsElement.classList.add("hide");
  }
};

const searchProduct = (product) => {
  const quantityProduct = productsCart.filter((nameProduct) => {
    return nameProduct.name.toLowerCase().includes(product.toLowerCase());
  });
  // const quantityProduct = productsCart.filter((nameProduct) =>
  //   nameProduct.name.toLowerCase().includes(product)
  // ); también es valido sin llaves y no se usaria "return"

  // console.log(quantityProduct);
  noProducts(quantityProduct.length);
  newProducts(quantityProduct);
};

const getProduct = (event) => {
  const nameProduct = event.target.value;
  // console.log(nameProduct);
  searchProduct(nameProduct);
};

const checkboxSugarless = () => {
  let filterProduct = "";

  if (sugarlessCheckboxElement.checked) {
    filterProduct = productsCart.filter((product) => {
      return product.sugarless === true;
    });
  } else {
    filterProduct = productsCart;
  }

  newProducts(filterProduct);
};

const orderSelectProducts = () => {
  const selectOption = orderSelectElement.value;

  let orderOptions = [...productsCart];

  // console.log(orderOptions);

  if (selectOption === "name") {
    orderOptions.sort((a, b) => a.name.localeCompare(b.name));
    console.log(orderOptions);
  } else if (selectOption === "price") {
    orderOptions.sort((a, b) => a.price - b.price);
  }

  newProducts(orderOptions);
};

// users.sort((a, b) => a.localeCompare(b));

const newProducts = (products) => {
  productsElement.textContent = "";

  fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const newProduct = document.createElement("div");
    newProduct.classList.add("products-container");

    const newImgProduct = document.createElement("img");
    newImgProduct.src = product.img;

    const newSugarlessTittle = document.createElement("h2");
    newSugarlessTittle.classList.add("sugarlees-title");
    newSugarlessTittle.textContent = product.name;

    const newSugarlessProduct = document.createElement("span");
    newSugarlessProduct.classList.add("sugarless-product");
    //product.sugarless (consultar en que se diferencia)

    if (product.sugarless === true) {
      newSugarlessProduct.textContent = `Sugarless`;
    } else if (product.sugarless === false) {
      newSugarlessProduct.textContent = ``;
    }

    const newSugarlessPrice = document.createElement("span");
    newSugarlessPrice.classList.add("sugarless-price");
    newSugarlessPrice.textContent = `$${product.price.toFixed(2)}`; //toFixed para añadir decimal

    newProduct.append(
      newImgProduct,
      newSugarlessTittle,
      newSugarlessProduct,
      newSugarlessPrice
    );

    fragment.append(newProduct);
    productsElement.append(fragment);
  });
};

newProducts(productsCart);

amountTextElement.addEventListener("input", getProduct);
sugarlessCheckboxElement.addEventListener("change", checkboxSugarless); // checkbox products
orderSelectElement.addEventListener("change", orderSelectProducts); //order products

// <div id="products" class="products">
//   <img src="./assets/img/image-waffle.jpg" alt="" />
//   <h2 class="sugarlees-title">Waffle with Berries</h2>
//   <span class="sugarless-product">Sugarless</span>
//   <span class="sugarless-price">$6.50</span>
// </div>;
