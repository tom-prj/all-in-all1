const login_button = document.querySelector("#login-btn");
const sign_up_button = document.querySelector("#signup-btn");
const container = document.querySelector(".container");

sign_up_button.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
    setTimeout(() => {
        container.classList.add("animate-transition"); // Add a class to kick off the animation
    }, 50);
});

login_button.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});