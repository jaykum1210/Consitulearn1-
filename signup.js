document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate the password and confirm password fields
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if the terms checkbox is checked
    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
        alert('You must agree to the terms and conditions');
        return;
    }

    // You can replace this alert with a real form submission or API call
    alert(`Sign Up Successful!\nName: ${fullName}\nEmail: ${email}`);

    // Optionally, reset the form
    document.getElementById('signup-form').reset();
});
