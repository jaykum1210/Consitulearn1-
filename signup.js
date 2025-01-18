document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Sending the form data to the backend via a POST request
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST', // POST method to submit form data
            headers: {
                'Content-Type': 'application/json', // Tell the backend we are sending JSON data
            },
            body: JSON.stringify({ username, email, password }), // Send form data in JSON format
        });

        const data = await response.json(); // Parse the response from the backend
        if (response.ok) {
            // If successful, show a success message and redirect
            alert(data.message);
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            // If there was an error (e.g., email or username already exists)
            alert(data.error || 'An error occurred');
        }
    } catch (error) {
        // Handle errors (e.g., if the backend is not reachable)
        alert('Unable to connect to the server');
    }
});
