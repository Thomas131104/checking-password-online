document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("checkingPassword");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const password = document.getElementById("password").value;

        fetch("https://checking-password-online-1.onrender.com/api/check-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password: password })
        })
        .then(response => response.json())
        .then(data => {
            const scoreSpan = document.getElementById("score");
            const crackSpan = document.getElementById("time-to-break");
            const breachSpan = document.getElementById("data-breach");
            const warningSpan = document.getElementById("warning");
            const adviceSpan = document.getElementById("advice");

            // Xóa class màu cũ nếu có
            scoreSpan.className = "";
            scoreSpan.classList.add(`score-${data.score}`);
            scoreSpan.textContent = data.score;

            crackSpan.textContent = data.crack_time || "Không rõ";
            breachSpan.textContent = data.breached ? "Có!" : "Không";
            warningSpan.textContent = data.feedback?.warning || "Không có";
            adviceSpan.textContent = data.feedback?.suggestions?.join(", ") || "Không có";
        })
        .catch(error => {
            alert("Đã xảy ra lỗi!");
            console.error("Lỗi:", error);
        });
    });
});
