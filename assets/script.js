let quantity = 1;

function updateQuantity(displayQuantity) {
let quantity= document.querySelector(".total-quantity");
quantity.textContent = displayQuantity;
}

const quantDown = document.querySelector("#quantity-down")
const quantUp = document.querySelector("#quantity-up");


quantDown.addEventListener('click', function(e) {
    if (quantity > 0 ) {
    quantity--;
    updateQuantity(`Quantity: ${quantity}`);
}
});

quantUp.addEventListener('click', function (e) {
    quantity++;
    updateQuantity(`Quantity: ${quantity}`);
});