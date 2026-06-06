
const toggleBtn = document.getElementById("galleryToggleBtn");
const hiddenImages = document.querySelectorAll(".extra-image");

let showAll = false;

toggleBtn.addEventListener("click", () => {

    showAll = !showAll;

    hiddenImages.forEach((img) => {

        img.style.display = showAll
            ? "block"
            : "none";

    });

    toggleBtn.textContent = showAll
        ? "Show Less"
        : "View More";

});

