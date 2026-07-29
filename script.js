const enterButton = document.getElementById("enterButton");
const container = document.querySelector(".container");
const stars = document.getElementById("stars");

enterButton.addEventListener("click", () => {

    enterButton.disabled = true;
    enterButton.innerHTML = "ENTERING...";

    stars.style.transition = "2s";
    stars.style.transform = "scale(1.4)";
    stars.style.opacity = "0.9";

    container.style.transition = "1.8s";
    container.style.transform = "scale(.92)";
    container.style.opacity = "0";

    document.body.style.transition = "2s";
    document.body.style.background =
        "radial-gradient(circle,#53d8ff 0%,#102970 30%,#02030a 100%)";

    setTimeout(() => {

        window.location.href = "portal.html";

    },1800);

});