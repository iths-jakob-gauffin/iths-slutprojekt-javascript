const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img")
const opacity = 0.6;

//DENNA FUNKAR MEN GÖR SEN EN ANNAN FUNKTION
// imgs.forEach(img => img.addEventListener("click", (e) => {
//     current.src = e.target.src
// }));

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
    // Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image to src of clciked image
    current.src = e.target.src;

    //Add fade in class
    setTimeout(() => current.classList.remove("fade-in"), 500);

    current.classList.add("fade-in");
    //Change opacity to opacity var
    e.target.style.opacity = opacity;
}