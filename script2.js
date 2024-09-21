document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate form inputs
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // If validation passes, proceed to "login"
        alert("Login successful!");
        // Here you could implement actual login logic, like redirecting to a dashboard
    });

    // Function to validate email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to validate password (at least 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Forgot password link click event (optional)
    const forgotPasswordLink = document.getElementById("forgot-password");
    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent link redirection for now
        alert("Forgot password functionality not implemented yet.");
    });
});
