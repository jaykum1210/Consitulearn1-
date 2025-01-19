document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // If login is successful, redirect to the homepage or another page
        alert(data.message);
        window.location.href = 'home.html'; // Redirect to home or dashboard
      } else {
        alert(data.message); // Show error message
      }
    } catch (err) {
      alert('An error occurred. Please try again later.');
      console.error(err);
    }
  });
  