document.addEventListener("DOMContentLoaded", () => {

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