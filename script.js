document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("enterButton");

    button.addEventListener("click", () => {

        button.textContent = "WELCOME";

        button.style.transform = "scale(1.08)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        },300);

    });

});