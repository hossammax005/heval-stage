const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    enterButton.innerHTML = "ENTERING...";

    enterButton.disabled = true;

    document.body.style.transition = "1s";

    document.body.style.transform = "scale(1.05)";

    document.body.style.filter = "brightness(1.3)";

    setTimeout(() => {

        document.body.style.opacity = "0";

    },800);

    setTimeout(() => {

        alert("Welcome to HEVAL");

        document.body.style.opacity = "1";
        document.body.style.transform = "scale(1)";
        document.body.style.filter = "brightness(1)";
        enterButton.innerHTML = "ENTER";
        enterButton.disabled = false;

    },1800);

});