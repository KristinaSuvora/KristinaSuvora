document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('favoriteColor').value = this.getAttribute('data-color');
        document.body.style.backgroundColor = this.getAttribute('data-color');
    });
});

document.querySelectorAll('.avatar-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('avatar').value = this.getAttribute('data-avatar');
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const favoriteColor = document.getElementById('favoriteColor').value;
    const avatar = document.getElementById('avatar').value;
    const dream = document.getElementById('dream').value;
    localStorage.setItem('name', name);
    localStorage.setItem('favoriteColor', favoriteColor);
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('dream', dream);
    window.location.href = 'main.html';
});
