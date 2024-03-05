function checkSurprise() {
    var inputText = document.getElementById("surpriseInput").value;
    if (inputText === "23") {
        window.location.href = "birthday.html";
    } else {
        alert("Sorry, that's not the right code. Try again!");
    }
}

