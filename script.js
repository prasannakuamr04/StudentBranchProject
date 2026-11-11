
function register() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var course = document.getElementById("course").value;

    if (name == "" || roll == "" || course == "") {
        document.getElementById("result").innerHTML =
            "Please fill all fields!";
    }
    else {
        var students = JSON.parse(
            localStorage.getItem("students") || "[]"
        );

        students.push({name: name, roll: roll, course: course});

        localStorage.setItem("students", JSON.stringify(students));

        document.getElementById("result").innerHTML =
            "Student Registered Successfully!";
    }
}

function searchStudent() {

    var roll = document.getElementById("searchRoll").value;

    var students = JSON.parse(
        localStorage.getItem("students") || "[]"
    );

    var found = false;

    for (var i = 0; i < students.length; i++) {

        if (students[i].roll == roll) {

            document.getElementById("result").innerHTML =
                "Name: " + students[i].name +
                "<br>Course: " + students[i].course;

            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("result").innerHTML =
            "Student Not Found!";
    }
}
