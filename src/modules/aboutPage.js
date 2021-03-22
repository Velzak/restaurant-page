
function createSection(id){
    const section = document.createElement('section')
    section.setAttribute('id', id)
    return section
}

function createHeading(id, text){
    const heading = document.createElement('h2')
    heading.setAttribute('id', id)
    heading.textContent = text
    return heading
}

function createPara(id, text){
    const p = document.createElement('p')
    p.setAttribute('id', id)
    p.textContent = text
    return p
}

function createImg(id, src){
    const img = document.createElement('img')
    img.setAttribute('id', id)
    img.src = src
    return img
}

function createEmail(id, text){
    const p = document.createElement('p')
    const a = document.createElement('a')
    a.setAttribute('id', id)
    a.href = '#'
    a.textContent = text
    p.appendChild(a)
    return p
}

function loadAbout(){
    const main = document.querySelector('#main')

    const section = createSection('about')
    main.appendChild(section)

    const aboutUs = createHeading('aboutUs', 'About Us')
    section.appendChild(aboutUs)

    const aboutSection = createSection('aboutDetails')
    section.appendChild(aboutSection)

    const aboutParagraph = createPara('aboutPara', 'At Arlo, we strive to create an experince for ramen lovers and newcomers alike.  Our traditional ramen selection has many options for all to try.')
    aboutSection.appendChild(aboutParagraph)

    const img = createImg('ramenImg', 'images/ramen.jpg')
    aboutSection.appendChild(img)

    const contactHeading = createHeading('contactHeading', 'Contact Us')
    section.appendChild(contactHeading)

    const contact = createSection('contact')
    section.appendChild(contact)

    const address = createPara('address', '123 Sunny Way, City, State 12345')
    contact.appendChild(address)

    const email = createEmail('email', 'Arlo@Arlo.com')
    contact.appendChild(email)

    const phone = createPara('phone', '123-456-7890')
    contact.appendChild(phone)

}

export default loadAbout