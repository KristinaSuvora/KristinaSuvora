// Меню навигации
function navigateTo(page) {
    window.location.href = page;
}

// Кнопка выхода
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

// Часы
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// Случайная цитата
const quotes = [
    "Каждый день — это новый шанс начать заново.",
    "Верь в себя и все получится.",
    "Сделай сегодня то, что другие не хотят — и завтра ты будешь там, где другие не могут."
];
document.getElementById('daily-quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
