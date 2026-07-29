const starsContainer = document.getElementById("stars");

if (starsContainer) {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            (Math.random() * 4) + "s";

        star.style.animationDuration =
            (2 + Math.random() * 5) + "s";

        starsContainer.appendChild(star);

    }

}