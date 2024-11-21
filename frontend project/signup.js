// JavaScript to handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password === confirmPassword) {
        // Store the user's username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert("Registration Successful! You can now log in.");

        // Redirect to the login page after successful registration
        window.location.href = 'login.html'; // Change this to the actual login page URL
    } else {
        alert("Passwords do not match!");
    }
});
