interface Product {
  id: number;
  name: string;
  price: number;
}

localStorage.clear();
let addProduct = true;

const saveProduct = (product: Product) => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products, null, 2));
};

const showProducts = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const el = document.getElementById("container");
  el.innerHTML = `<p>productos registrados:</p> <code>${JSON.stringify(
    products,
    null,
    2
  )}</code>`;
};

while (addProduct) {
  let n = prompt("Ingrese nombre del producto:");
  let p = parseFloat(prompt("Ingrese el precio del producto:"));

  const product: Product = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: n,
    price: p,
  };

  saveProduct(product);

  addProduct = confirm("¿Desea agregar otro producto?");
}

showProducts();
