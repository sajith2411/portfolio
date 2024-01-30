const navbar = document.querySelector(".navbar")
const icon = document.querySelector(".icon")


icon.addEventListener("click", () => {
    navbar.classList.toggle("active")
});


window.addEventListener('scroll', () => {

    const position = window.scrollY

    if (position > 10) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.7)';
    }
    else{
        navbar.style.backgroundColor = "transparent"
    }


    console.log(position);
});