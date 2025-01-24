document.addEventListener('DOMContentLoaded', function () {
    // Выбор аватара
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('avatar').value = this.getAttribute('data-avatar');
        });
    });

    // Выбор цвета
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('favoriteColor').value = this.getAttribute('data-color');
        });
    });

    // Отправка формы
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const favoriteColor = document.getElementById('favoriteColor').value;
        const avatar = document.getElementById('avatar').value;
        localStorage.setItem('favoriteColor', favoriteColor);
        localStorage.setItem('avatar', avatar);
        alert('Ваш мир успешно создан!');
    });
});
