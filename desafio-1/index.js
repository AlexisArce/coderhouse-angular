localStorage.clear();
var addProduct = true;
var saveProduct = function (product) {
    var products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products, null, 2));
};
var showProducts = function () {
    var products = JSON.parse(localStorage.getItem("products")) || [];
    var el = document.getElementById("container");
    el.innerHTML = "<p>productos registrados:</p> <code>" + JSON.stringify(products, null, 2) + "</code>";
};
while (addProduct) {
    var n = prompt("Ingrese nombre del producto:");
    var p = parseFloat(prompt("Ingrese el precio del producto:"));
    var product = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: n,
        price: p
    };
    saveProduct(product);
    addProduct = confirm("¿Desea agregar otro producto?");
}
showProducts();
