var orderButton = document.getElementById("orderButton");
orderButton.addEventListener('click', function(event) {
    window.history.replaceState({param:"order"},'', window.location.pathname + 'hello');
});