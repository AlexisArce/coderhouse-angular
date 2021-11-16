interface Product {
  id: number;
  name: string;
  price: number;
}

let n = prompt("Ingrese nombre del producto:");
let p = parseFloat(prompt("Ingrese el precio del producto:"));

const product: Product = {
  id: Math.floor(Math.random() * 1000) + 1,
  name: n,
  price: p,
};

const saveProduct = (product: Product) => {
  const el = document.getElementById("container");
  el.innerHTML = `<p>producto registrado:</p> <code>${JSON.stringify(
    product,
    null,
    2
  )}</code>`;
};

saveProduct(product);
