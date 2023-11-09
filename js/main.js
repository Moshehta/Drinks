var allproducts = document.querySelectorAll(".row .card");
var cards = document.querySelector(".display_product");
var btn1 = document.querySelector(".btn");
var total_price = 0;

allproducts.forEach(function (item) {
    item.onclick = function () {
        total_price += +(item.getAttribute("price"));
        cards.innerHTML += item.textContent+" and ";
    }
})

btn1.onclick = function () {
    alert("Total price is :" + total_price + "$");
    console.log(total_price);
}