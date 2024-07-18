async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage('user', message);
    userInput.value = '';

    const response = await fetch('https://chatbot-backend.yourusername.repl.co/api/chat', {  // Update this URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();
    appendMessage('bot', data.response);
}

function appendMessage(sender, message) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = message;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}
