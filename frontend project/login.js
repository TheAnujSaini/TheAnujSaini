// JavaScript to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user details from localStorage (from signup.js)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored ones
    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful!");

        // Redirect to the fitness guide page after successful login
        window.location.href = 'fit.html'; // Change this to your actual fitness guide page URL
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
