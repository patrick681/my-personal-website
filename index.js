document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", function() {
        this.classList.add("highlight");
    });
    button.addEventListener("mouseleave", function() {
        this.classList.remove("highlight");
    });
});

