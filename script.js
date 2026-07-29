const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    enterButton.innerHTML = "Loading...";

    enterButton.disabled = true;

    enterButton.style.opacity = "0.7";

    document.body.style.transition = "1s";

    document.body.style.filter = "brightness(1.25)";

    setTimeout(() => {

        alert("Welcome to HEVAL STAGE");

        document.body.style.filter = "brightness(1)";

        enterButton.innerHTML = "ENTER";

        enterButton.disabled = false;

        enterButton.style.opacity = "1";

    },1200);

});