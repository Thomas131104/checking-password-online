const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Đổi icon nếu muốn (emoji đơn giản)
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});
