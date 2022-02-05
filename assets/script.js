let quantity = 1;
const quantDown = document.querySelector("#quantity-down")
const quantUp = document.querySelector("quantity-up");


quantDown.addEventListener('click', function(e) {
    if (quantity > 0 ) {
    quantity--;
}
});

quantUp.addEventListener('click', function (e) {
    quantity++;
});