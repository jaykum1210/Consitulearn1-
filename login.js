// login.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the input fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate login validation (You can replace this with actual backend API call)
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to the homepage or dashboard
        window.location.href = "index.html"; // Change this to your desired page after login
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
