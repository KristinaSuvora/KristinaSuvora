document.addEventListener('DOMContentLoaded', () => {
    // Выбор цвета
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('favoriteColor').value = this.getAttribute('data-color');
        });
    });

    // Выбор аватара
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('avatar').value = this.getAttribute('data-avatar');
        });
    });

    // Отправка формы
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        localStorage.setItem('favoriteColor', document.getElementById('favoriteColor').value);
        localStorage.setItem('avatar', document.getElementById('avatar').value);
        localStorage.setItem('name', document.getElementById('name').value);
        localStorage.setItem('dream', document.getElementById('dream').value);
        window.location.href = 'main.html'; // Переход на страницу меню
    });
});
