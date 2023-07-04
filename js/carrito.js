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
const rowProducts = document.querySelector("row-product");

// LISTA DE TODOS LOS CONTENEDORES DE PRODUCTOS

const productsList = document.querySelector(".content-store");

// VARIABLE DE ARRELGOS DE PRODUCTOS
let allProducts = [];

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-add")) {
    const product = e.target.parentElement;

    const infoProduct = {
      quantify: 1,
      tittle: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };

    allProducts = [...allProducts, infoProduct];
  }

  showHTML();
});

// FUNCIÓN PARA MOSTRAR HTML

const showHTML = () => {
  //LIMPIAR HTML
  // rowProducts.innerHTML = "";

  allProducts.forEach((product) => {
    const containerProducts = document.createElement("div");
    containerProducts.classList.add("producto-agregado");

    containerProducts.innerHTML = `
      
        <div class="info-producto-agregado">

          <span class="cantidad-producto-carrito">
            ${product.quantify}
          </span>
          <p class="titulo-producto-carrito">${product.tittle}</p>
          <span class="precio-producto-carrito">${product.price}</span>

        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="icon-close">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    
    `;

    rowProducts.append(containerProducts);
  });
  console.log(containerProducts)
}

