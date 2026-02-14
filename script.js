document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function sendEmail(event) {
    event.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_alejs2008", "template_dgqnffe", params)
        .then(() => {
            alert("Messaggio inviato con successo!");
        })
        .catch((error) => {
            alert("Errore durante l'invio del messaggio.");
            console.error(error);
        });
}

console.log("Portfolio loaded");