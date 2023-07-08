// wow js 
new WOW().init();

// scroll to top button 
const scrollToTopButton = document.getElementById("btn-back-to-top");

// add event on scrolling
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    }
    else {
        scrollToTopButton.style.display = "none";
    }
});

// add event on clicking the button
scrollToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
scrollToTopButton.addEventListener('click', backToTop);
