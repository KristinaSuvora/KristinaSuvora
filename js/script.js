document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('favoriteColor').value = this.getAttribute('data-color');
        document.body.style.backgroundColor = this.getAttribute('data-color');
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const favoriteColor = document.getElementById('favoriteColor').value;
    localStorage.setItem('favoriteColor', favoriteColor);
    window.location.href = 'main.html';
});
