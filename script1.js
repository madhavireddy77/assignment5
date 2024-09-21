document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate form inputs
        if (!validateName(name)) {
            alert("Please enter a valid name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // If validation is successful
        alert("Registration successful!");
        form.reset(); // Optionally reset the form after submission
    });

    // Validate name (ensure it's not empty)
    function validateName(name) {
        return name.length > 0;
    }

    // Validate email using a simple regex pattern
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Validate password (check if it's at least 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
});
