let theme = localStorage.getItem("theme") || "light-mode"
localStorage.setItem("theme", theme)
document.documentElement.setAttribute("data-theme", theme)
document.querySelector("#switch").checked = (theme == "light-mode") ? false : true

const menu_options = ["home", "skills", "portfolio", "works"]
const pos_top_skills = document.querySelector("#skills").offsetTop
const pos_top_portfolio = document.querySelector("#portfolio").offsetTop
const pos_top_works = document.querySelector("#works").offsetTop

function scrollNavbar() {
    (document.documentElement.scrollTop > 1) 
    ? document.querySelector("#nav").classList.add("scrolled") 
    : document.querySelector("#nav").classList.remove("scrolled")

    if (document.documentElement.scrollTop > 0) setMenuSelected("home")
    if (document.documentElement.scrollTop + 400 > pos_top_skills ) setMenuSelected("skills")
    if (document.documentElement.scrollTop + 400 > pos_top_portfolio) setMenuSelected("portfolio")
    if (document.documentElement.scrollTop + 400 > pos_top_works) setMenuSelected("works")
}

document.querySelector("#switch").addEventListener("change", (e) => {
    theme = (theme == "light-mode") ? "dark-mode" : "light-mode"
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
})

window.onscroll = function() { scrollNavbar() }

document.addEventListener("click", e => {
    const $menu_select = e.target.id.substring(5);
    const menu_find = menu_options.find(e => e == $menu_select)
    if (menu_find) setMenuSelected(menu_find)
})

function setMenuSelected(selected_id) {
    for (let elem of menu_options) {
        document.getElementById(`li-${elem}`).classList.remove("active")
    }
    document.getElementById(`li-${selected_id}`).classList.add("active")
}