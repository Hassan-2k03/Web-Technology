function submit() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var srn = document.getElementById("srn").value;
    var email = document.getElementById("email").value;
    var phno = document.getElementById("phno").value;
    var gen = document.getElementById("gen").value;
    var hbox = document.getElementById("hbox").value;
    var pay = document.getElementById("pay").value;
    if (fname == "" || lname == "" || srn == "" || email == "" || phno == "" || gen == "" || hbox == "" || pay == "") {
        alert("Please fill all the fields");
        return true;
    }
    else {
        alert("Form submitted successfully");
        return false;
    }
}