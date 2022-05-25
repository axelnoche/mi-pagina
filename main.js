function add() {
    var result =
    Number(document.getElementById("firstno").value) +
    Number(document.getElementById("secondno").value);
    document.getElementById("result").innerHTML=result;
    }