function createSection(id) {
  const section = document.createElement("section");
  section.setAttribute("id", id);
  return section;
}

function createHeading(id, text) {
  const heading = document.createElement("h2");
  heading.setAttribute("id", id);
  heading.textContent = text;
  return heading;
}

function createP(id, text) {
  const p = document.createElement("p");
  p.setAttribute("id", id);
  p.textContent = text;
  return p;
}

function createLink(id, src, text){
    const href = document.createElement('a')
    href.setAttribute('id', id)
    href.href = src
    href.textContent = text
    return href
}

function createImg(id, src){
    const img = document.createElement('img')
    img.setAttribute('id', id)
    img.src = src
    return img
}

function loadHome(){
    const main = document.querySelector('#main')

    const section = createSection('details')
    main.appendChild(section)

    const heading = createHeading('arlo', 'Not Just Another Ramen Bar')
    section.appendChild(heading)

    const tagline = createP('tagline', 'Tagline Goes Here!')
    section.appendChild(tagline)

    const orderLink = createLink('order', '#', 'Order Now')
    section.appendChild(orderLink)

    const sectionPara = createSection('para')
    main.appendChild(sectionPara)

    // const img = createImg('img1', '/dist/images/ramen.jpg')
    // sectionPara.appendChild(img)

    const p = createP('basicInfo', 'Inspired by American Cuisine. Built on the principle that food tastes better in larger quantities.  For the vibrant community of Portland.')
    sectionPara.appendChild(p)

}

export default loadHome
