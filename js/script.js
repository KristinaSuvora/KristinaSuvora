
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            contents.forEach(content => {
                if (content.id === tab.dataset.tab) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });
        });
    });

    // Chat functionality placeholder
    const sendButton = document.getElementById("sendMessage");
    const inputField = document.getElementById("chatInput");
    const chatBox = document.querySelector(".chat-box");

    if (sendButton && inputField && chatBox) {
        sendButton.addEventListener("click", () => {
            const message = inputField.value.trim();
            if (message) {
                const newMessage = document.createElement("div");
                newMessage.classList.add("message", "sent");
                newMessage.textContent = message;
                chatBox.appendChild(newMessage);
                inputField.value = "";
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    }
});
    