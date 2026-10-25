// Contact form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").textContent =
            "Thank you, " + name + "! Your form is ready.";

        form.reset();
    });
}

// Page animation
document.body.style.opacity = "0";

window.addEventListener("load", function() {
    document.body.style.transition = "opacity 0.8s";
    document.body.style.opacity = "1";
});