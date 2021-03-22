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
}
