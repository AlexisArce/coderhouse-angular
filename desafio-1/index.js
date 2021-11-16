var n = prompt("Ingrese nombre del producto:");
var p = parseFloat(prompt("Ingrese el precio del producto:"));
var product = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: n,
    price: p
};
var saveProduct = function (product) {
    console.log("Producto guardado:", JSON.stringify(product, null, 2));
    var el = document.getElementById("container");
    el.innerHTML = "<p>producto registrado:</p> <code>" + JSON.stringify(product, null, 2) + "</code>";
};
saveProduct(product);
