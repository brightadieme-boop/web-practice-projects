function greetUser() {
    let name = document.getElementById("username").value;

    if (name === "") {
        document.getElementById("output1").innerText = "Please enter your name first ";
    } else {
        document.getElementById("output1").innerText = `Hello, ${name}! Welcome to my page`;
    }
}

function greetUser2() {
    let userMail = document.getElementById("mail").value;
    if (userMail ==="") {
        document.getElementById("output2").innerText = "please enter your email here ";
    } else if (!userMail.includes("@")) {
        document.getElementById("output2").innerText = "invalid input please try again";
    } else {
        document.getElementById("output2").innerText = "Email validated, welcome!"
    }
}