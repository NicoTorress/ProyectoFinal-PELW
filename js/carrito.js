//FUNCIONAMIENTO CARRITO DE LA TIENDA

const btnCart = document.querySelector(".container-card-icon");
const containerCardsProducts = document.querySelector(
  ".container-cards-products"
);

btnCart.addEventListener("click", () => {
  containerCardsProducts.classList.toggle("hidden-card");
});

/* ======================= */

const cardInfo = document.querySelector(".producto-agregado");
const rowProducts = document.querySelector(".row-product");
const totalPagar = document.querySelector(".total-pagar");
const contadorProductos = document.getElementById("contador-productos");

// LISTA DE TODOS LOS CONTENEDORES DE PRODUCTOS
const productsList = document.querySelector(".content-store");

// VARIABLE DE ARREGLO DE PRODUCTOS
let allProducts = {};
let totalPrice = 0;

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-add")) {
    const product = e.target.parentElement;

    const productTitle = product.querySelector("h2").textContent;
    const productPrice = parseFloat(product.querySelector("p").textContent.replace(/[^0-9.-]+/g, ""));

    if (allProducts[productTitle]) {
      allProducts[productTitle].quantify++;
    } else {
      allProducts[productTitle] = {
        quantify: 1,
        price: productPrice,
      };
    }

    totalPrice += productPrice; // Sumar el precio del producto al total
    totalPagar.textContent = "$" + totalPrice; // Actualizar el total en el carrito

    // Actualizar la cantidad de productos en el carrito
    const totalQuantify = Object.values(allProducts).reduce((total, product) => total + product.quantify, 0);
    contadorProductos.textContent = totalQuantify;

    showHTML();
  }
});

// FUNCIÓN PARA MOSTRAR HTML
const showHTML = () => {
  //LIMPIAR HTML
  rowProducts.innerHTML = "";

  Object.keys(allProducts).forEach((title) => {
    const product = allProducts[title];

    const containerProducts = document.createElement("div");
    containerProducts.classList.add("producto-agregado");

    containerProducts.innerHTML = `
      <div class="info-producto-agregado">
        <span class="cantidad-producto-carrito">${product.quantify}</span>
        <p class="titulo-producto-carrito">${title}</p>
        <span class="precio-producto-carrito">$${product.price}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`;

    const closeIcon = containerProducts.querySelector(".icon-close");
    closeIcon.addEventListener("click", () => {
      // Obtener la cantidad y el precio del producto a eliminar
      const quantityToRemove = product.quantify;
      const priceToRemove = product.price * quantityToRemove;

      // Restar el precio de los productos eliminados del total
      totalPrice -= priceToRemove;
      totalPagar.textContent = "$" + totalPrice; // Actualizar el total en el carrito

      // Eliminar el producto del objeto allProducts
      delete allProducts[title];

      // Actualizar la cantidad de productos en el carrito
      const totalQuantify = Object.values(allProducts).reduce((total, product) => total + product.quantify, 0);
      contadorProductos.textContent = totalQuantify;

      showHTML(); // Volver a mostrar el HTML actualizado
    });

    rowProducts.append(containerProducts);
  });

};
