document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById('name').value;
    const favoriteColor = document.getElementById('favoriteColor').value;
    const age = document.getElementById('age').value;
    const dream = document.getElementById('dream').value;

    // Save to localStorage (to simulate saving user preferences)
    localStorage.setItem('name', name);
    localStorage.setItem('favoriteColor', favoriteColor);
    localStorage.setItem('age', age);
    localStorage.setItem('dream', dream);

    // Redirect to the main page
    window.location.href = 'main.html';
});