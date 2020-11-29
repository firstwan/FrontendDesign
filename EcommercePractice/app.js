const hamburger = document.querySelector(".nav_toggle")
const nav = document.querySelector(".nav_menu")
const navLink = document.querySelectorAll(".nav_link")


function showMenu() {
    hamburger.addEventListener('click', () =>{
        nav.classList.toggle('nav_show')
    })
}

navLink.forEach(link => link.addEventListener('click', () => {
    navLink.forEach(link => link.classList.remove('nav_active'))
    link.classList.add('nav_active')
})) 


showMenu()