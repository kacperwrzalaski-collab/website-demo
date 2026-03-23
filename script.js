* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
    background: #0f172a;
    color: #e5e7eb;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    padding: 20px 30px;
    border-bottom: 1px solid #1f2937;
    background: #020617;
}

header h1 {
    font-size: 1.8rem;
    margin-bottom: 4px;
}

header p {
    font-size: 0.9rem;
    color: #9ca3af;
}

main {
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.assistant-container {
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: 1100px;
}

.assistant-window {
    flex: 3;
    background: #020617;
    border-radius: 12px;
    border: 1px solid #1f2937;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#chat-window {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.message {
    max-width: 80%;
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 0.95rem;
    line-height: 1.4;
}

.message.bot {
    align-self: flex-start;
    background: #111827;
    border: 1px solid #1f2937;
}

.message.user {
    align-self: flex-end;
    background: #2563eb;
    color: white;
}

#chat-form {
    display: flex;
    gap: 8px;
    padding: 10px;
    border-top: 1px solid #1f2937;
    background: #020617;
}

#user-input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 999px;
    border: 1px solid #374151;
    background: #020617;
    color: #e5e7eb;
    outline: none;
}

#user-input:focus {
    border-color: #2563eb;
}

button {
    cursor: pointer;
    border: none;
    border-radius: 999px;
    padding: 10px 16px;
    background: #2563eb;
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
}

button:hover {
    background: #1d4ed8;
}

.assistant-list {
    flex: 1;
    background: #020617;
    border-radius: 12px;
    border: 1px solid #1f2937;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.assistant-list h2 {
    font-size: 1rem;
    margin-bottom: 6px;
}

.assistant-btn {
    width: 100%;
    text-align: left;
    background: #020617;
    border-radius: 8px;
    border: 1px solid #1f2937;
    padding: 8px 10px;
    font-size: 0.9rem;
}

.assistant-btn.active {
    background: #111827;
    border-color: #2563eb;
}

footer {
    padding: 10px 20px;
    font-size: 0.8rem;
    color: #6b7280;
    border-top: 1px solid #1f2937;
    background: #020617;
    text-align: center;
}

@media (max-width: 800px) {
    .assistant-container {
        flex-direction: column-reverse;
    }
}