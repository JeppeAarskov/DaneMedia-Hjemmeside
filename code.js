// code.js
console.log("Button Clicked");
function SendMail() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var besked = document.getElementById("besked").value;

    // Check if all fields are filled
    if (fullName && email && besked) {
        var params = {
            from_name: fullName,
            email: email,
            besked: besked,
        };

        emailjs.send("service_6s2eybs", "template_k3zu9ng", params).then(function (res) {
            alert("Success! " + res.status);

            // Clear input fields and textarea
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("besked").value = "";
        });
    } else {
        alert("Please fill in all fields before sending.");
    }
}