import loadPage from './modules/initalLoad'
import loadHome from './modules/homePage'
import loadMenu from './modules/menuPage'
import loadAbout from './modules/aboutPage'
init()

function init(){
    loadPage()
    loadHome()
    loadMenu()
    loadAbout()
    const details = document.querySelector('#details')
    const menu = document.querySelector('#menu-content')
    const about = document.querySelector('#about')

    const homeTab = document.querySelector('#homeTab')
    homeTab.addEventListener('click', () =>{
        details.style.display = 'flex'
        menu.style.display = 'none'
        about.style.display = 'none'
    })

    const menuTab = document.querySelector('#menuTab')
    menuTab.addEventListener('click', () =>{
        menu.style.display = 'flex'
        details.style.display = 'none'
        about.style.display = 'none'
    })

    const aboutTab = document.querySelector('#aboutTab')
    aboutTab.addEventListener('click', () =>{
        about.style.display = 'flex'
        menu.style.display = 'none'
        details.style.display = 'none'
    })

    const orderNow = document.querySelector('#order')
    orderNow.addEventListener('click', () =>{
        menu.style.display = 'flex'
        details.style.display = 'none'
        about.style.display = 'none'
    })

    const arloHome = document.querySelector('h1')
    arloHome.addEventListener('click', () =>{
        details.style.display = 'flex'
        menu.style.display = 'none'
        about.style.display = 'none'
    })

    
    
}
