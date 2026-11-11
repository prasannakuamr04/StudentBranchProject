
function register() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var course = document.getElementById("course").value;

    if (name == "" || roll == "" || course == "") {
        document.getElementById("result").innerHTML =
            "Please fill all fields!";
    }
    else {
        document.getElementById("result").innerHTML =
            "Student Registered Successfully!";
    }
}
