let quantity = 1;
const itemPrice = 15;
let cartTotal = quantity * itemPrice;

function updateQuantity(displayQuantity) {
let quantity= document.querySelector(".total-quantity");
quantity.textContent = displayQuantity;
dispTotal.textContent = cartTotal;
}

const quantDown = document.querySelector("#quantity-down")
const quantUp = document.querySelector("#quantity-up");
const dispTotal = document.querySelector("h1");


quantDown.addEventListener('click', function(e) {
    if (quantity > 0 ) {
    quantity--;
    cartTotal = quantity * itemPrice;
    updateQuantity(`Quantity: ${quantity}`);
}
});

quantUp.addEventListener('click', function (e) {
    quantity++;
    cartTotal = quantity * itemPrice;
    updateQuantity(`Quantity: ${quantity}`);
});