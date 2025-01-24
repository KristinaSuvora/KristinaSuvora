document.addEventListener('DOMContentLoaded', () => {
    const favoriteColor = localStorage.getItem('favoriteColor');
    if (favoriteColor) {
        document.body.style.backgroundColor = favoriteColor;
    }
});
