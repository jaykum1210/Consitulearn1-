document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to the server using fetch
    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        // If signup is successful, redirect to the login page
        alert('Signup successful! Please log in.');
        window.location.href = 'login.html';
    } else {
        // If there was an error, show the error message
        alert('Signup failed: ' + data.message);
    }
});
