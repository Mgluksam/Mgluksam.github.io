window.addEventListener('DOMContentLoaded', function (event) {
    let d = document.getElementById("flexCheckChecked");
    d.addEventListener("change", function (event) {
        if (d.checked){
            document.getElementById("result").innerHTML = parseInt(document.getElementById("result").value)+150 + " руб.";
        }
        else{
            document.getElementById("result").innerHTML = parseInt(document.getElementById("result").value)-150 + " руб.";
        }
    });
    
    let s = document.getElementsByClassName("amount");
    s[0].addEventListener("change", function (event) {

        let selected_toy = document.getElementById("Toys");
        selected_toy = selected_toy.options[selected_toy.selectedIndex].value;

        let amount_toys = event.target.value;

        document.getElementById("result").innerHTML = selected_toy * 100 * amount_toys + " руб.";
        
        
        document.getElementById("flexCheckChecked").checked=false;
    });
    let t = document.getElementsByClassName("toys");
    t[0].addEventListener("change", function (event) {

        selected_toy = event.target.value;

        let amount_toys = document.getElementById("Amount");
        amount_toys = amount_toys.options[amount_toys.selectedIndex].value;

        document.getElementById("result").innerHTML = selected_toy * 100 * amount_toys + " руб.";
        
        if (selected_toy==3){
            document.getElementById("check1").removeAttribute("disabled");
            document.getElementById("check2").removeAttribute("disabled");
        }
        else{
            document.getElementById("check1").setAttribute("disabled", "true");
            document.getElementById("check2").setAttribute("disabled", "true");
            document.getElementById("check1").checked=true;
        }
        
        document.getElementById("flexCheckChecked").checked=false;
    });
});

function click1() {
    document.getElementById("main-information").classList.remove("visability");
    document.getElementById("toy-1-info").classList.add("visability");
    document.getElementById("toy-2-info").classList.add("visability");
    document.getElementById("toy-3-info").classList.add("visability");

    document.getElementById("field1").classList.add("active");
    document.getElementById("field2").classList.remove("active");
    document.getElementById("field3").classList.remove("active");
    document.getElementById("field4").classList.remove("active");
}

function click2() {
    document.getElementById("main-information").classList.add("visability");
    document.getElementById("toy-1-info").classList.remove("visability");
    document.getElementById("toy-2-info").classList.add("visability");
    document.getElementById("toy-3-info").classList.add("visability");

    document.getElementById("field1").classList.remove("active");
    document.getElementById("field2").classList.add("active");
    document.getElementById("field3").classList.remove("active");
    document.getElementById("field4").classList.remove("active");
}

function click3() {
    document.getElementById("main-information").classList.add("visability");
    document.getElementById("toy-1-info").classList.add("visability");
    document.getElementById("toy-2-info").classList.remove("visability");
    document.getElementById("toy-3-info").classList.add("visability");
    document.getElementById("field1").classList.remove("active");
    document.getElementById("field2").classList.remove("active");
    document.getElementById("field3").classList.add("active");
    document.getElementById("field4").classList.remove("active");
}

function click4() {
    document.getElementById("main-information").classList.add("visability");
    document.getElementById("toy-1-info").classList.add("visability");
    document.getElementById("toy-2-info").classList.add("visability");
    document.getElementById("toy-3-info").classList.remove("visability");
    document.getElementById("field1").classList.remove("active");
    document.getElementById("field2").classList.remove("active");
    document.getElementById("field3").classList.remove("active");
    document.getElementById("field4").classList.add("active");
}