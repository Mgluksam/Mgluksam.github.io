document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);
    
    function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        
    }
    function formValidate(form){ // Проверка валидации формы
        let error = 0;
        let formReq = document.querySelectorAll(".checkReq"); // Поля, которые необходимо проверять
        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);
            if (input.id == "FormEmail"){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            else if (input.getAttribute("type")==="checkbox" && input.checked===false){
                formAddError(input);
                error++;
            }
            else{
                if (input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
            
        }
        function formAddError(input){ // Добавление класса error к элементу
            input.classList.add("error");
        }
        function formRemoveError(input){ // Удаление класса error к элементу
            input.classList.remove("error");
        }
        function emailTest(input){ // Функция проверки корректности введенного email
            const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            return !EMAIL_REGEXP.test(input.value);
        }
        
    }
    
//    let orderButton = document.getElementById("orderButton"); // History API
//    orderButton.addEventListener('click', function (e) {
//        state = {
//            page: "index8.html/" + e.target.getAttribute('href'),
//        }
//        history.pushState(state, "", state.page) // Объект состояния, описание, относительная ссылка
//    });
//
//    window.addEventListener('popstate', function (e) { // Обработчик нажатия вперед/назад пользователя
//        document.getElementById("closeOrderButton").click();
//    });
});