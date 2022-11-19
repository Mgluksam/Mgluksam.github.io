let orderButton = document.getElementById("orderButton");
orderButton.addEventListener('click',function(e){
    state= {
        page: "index8/page",
    }
    history.pushState(state, "", state.page) // Объект состояния, описание, относительная ссылка
});
