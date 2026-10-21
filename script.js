function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    if (name && roll) {
        var li = document.createElement("li");
        li.innerText = name + " - " + roll;
        document.getElementById("list").appendChild(li);
    } else {
        alert("Enter all details");
    }
}