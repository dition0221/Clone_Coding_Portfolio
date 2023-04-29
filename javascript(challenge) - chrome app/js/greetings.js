const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const paintGreetings = (username) => {
    const greeting = document.querySelector("#greeting");
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

// =======================================

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    });
} else {
    paintGreetings(savedUsername);
}