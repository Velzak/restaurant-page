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

    const heading = createHeading('arlo', 'Welcome to Arlo')
    section.appendChild(heading)

    const sectionPara = createSection('para')
    section.appendChild(sectionPara)

    const img = createImg('img1', '/dist/images/ramen.jpg')
    sectionPara.appendChild(img)

    const p = createP('tagline', 'Inspired by American Cuisine. Built on the principle that food tastes better in larger quantities.  For the vibrant community of Portland.')
    sectionPara.appendChild(p)
}

export default loadHome
