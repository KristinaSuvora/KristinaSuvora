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
        const favoriteColor = document.getElementById('favoriteColor').value;
        const avatar = document.getElementById('avatar').value;
        const name = document.getElementById('name').value;
        const dream = document.getElementById('dream').value;

        // Сохраняем данные в localStorage
        localStorage.setItem('favoriteColor', favoriteColor);
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('name', name);
        localStorage.setItem('dream', dream);

        // Переход на следующую страницу
        window.location.href = 'main.html';
    });
});
