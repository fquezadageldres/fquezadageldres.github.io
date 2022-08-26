window.onscroll = function() {
    scrollNavbar()
};

function scrollNavbar() {
    if (document.documentElement.scrollTop > 1) {
        document.getElementById("nav").classList.add('scrolled');
    } else {
        document.getElementById("nav").classList.remove('scrolled');
    }
}