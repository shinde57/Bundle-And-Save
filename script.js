document.getElementById('addToCart').addEventListener('click', function () {
    const selectedPair = document.querySelector('input[name="pair"]:checked').value;
    alert(`You added ${selectedPair} pair(s) to your cart!`);
});