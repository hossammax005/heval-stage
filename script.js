documendocument.addEventListener("DOMContentLoaded", () => {

    // زر الدخول
    const enterButton = document.getElementById("enterButton");

    if (enterButton) {

        enterButton.addEventListener("click", () => {

            document.body.classList.add("entering");

            enterButton.disabled = true;
            enterButton.textContent = "ENTERING...";

            setTimeout(() => {

                window.location.href = "pages/home.html";

            }, 1200);

        });

    }

    // أزرار الصفحة الرئيسية
    const adamButton = document.getElementById("adamButton");
    const asrButton = document.getElementById("asrButton");
    const systemButton = document.getElementById("systemButton");

    if (adamButton) {

        adamButton.addEventListener("click", () => {

            alert("Adam's World - Coming Soon");

        });

    }

    if (asrButton) {

        asrButton.addEventListener("click", () => {

            alert("Asr's World - Coming Soon");

        });

    }

    if (systemButton) {

        systemButton.addEventListener("click", () => {

            alert("HEVAL Core - Under Construction");

        });

    }

});.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("enterButton");

    button.addEventListener("click", () => {

        document.body.classList.add("entering");

        button.disabled = true;
        button.textContent = "ENTERING...";

        setTimeout(() => {

            window.location.href = "pages/home.html";

        },1200);

    });

});