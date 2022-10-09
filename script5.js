function click1() {
    let n1, n2, r;
    n1 = document.getElementById("field1").value;
    n1 = parseInt(n1);
    n2 = document.getElementById("field2").value;
    n2 = parseInt(n2);
    r = n1 * n2;
    if (Number.isFinite(r)) {
        document.getElementById("result").innerHTML = r;
    } else {
        document.getElementById("result").innerHTML = "Параметры заданы неверно";
    }
}