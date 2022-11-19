let orderButton = document.getElementById("orderButton");
orderButton.addEventListener('click',function(e){
    state= {
        page: "page",
    }
    history.pushState(state, "", state.page) // Объект состояния, описание, относительная ссылка
});
