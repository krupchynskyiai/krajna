function changeQuantity(change, id) {
    var quantityInput = document.getElementById('quantity' + id);
    var currentValue = parseInt(quantityInput.value);
    var newValue = currentValue + change;
    if (newValue > 0) {
        quantityInput.value = newValue;
    }
}
