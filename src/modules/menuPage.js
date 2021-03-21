function createSection(id){
    const section = document.createElement('section')
    section.setAttribute('id', id)
    return section
}

function createHeader(id, text){
    const header = document.createElement('h2')
    header.setAttribute('id', id)
    header.textContent = text
    return header
}

function createMenuItem(title, text, price){
    const section = document.createElement('section') 
    section.setAttribute('class', 'menu-item')

    const name = document.createElement('h3')
    name.textContent = title
    section.appendChild(name)

    const priceTag = document.createElement('h4')
    priceTag.textContent = price
    section.appendChild(priceTag)

    const details = document.createElement('p')
    details.textContent = text
    section.appendChild(details)

    return section
}

function loadMenu(){
    const main = document.querySelector('#main')

    const topSection = createSection('menu')
    main.appendChild(topSection)

    const menuMain = createSection('menu-content')
    topSection.appendChild(menuMain)

    const menuTitle = createHeader('menuTitle', 'Arlo Menu')
    menuMain.appendChild(menuTitle)

    const shoyuRamen = createMenuItem('Shoyu Ramen', 'A simple but elegant soup infused with fragrant soy sauce', '$12.99')
    menuMain.appendChild(shoyuRamen)

    const shioRamen = createMenuItem('Shio Ramen', 'A clear, refined and gluten-free soup seasoned with roasted sea salt and charred green onions')
    menuMain.appendChild(shioRamen)
}

export default loadMenu