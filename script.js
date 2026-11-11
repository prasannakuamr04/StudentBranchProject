
function searchStudent() {

    var roll = document.getElementById("roll").value;

    if (roll == "101") {
        document.getElementById("result").innerHTML =
            "Student Found: Prasanna - CSE";
    }
    else {
        document.getElementById("result").innerHTML =
            "Student Not Found!";
    }
}
