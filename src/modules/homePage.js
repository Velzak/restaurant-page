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

function createLink(id, text) {
  const href = document.createElement("a");
  href.setAttribute("id", id);
  href.textContent = text;
  return href;
}

function loadHome() {
  const main = document.querySelector("#main");

  const section = createSection("details");
  main.appendChild(section);

  const detailSection = createSection("detailSection");
  section.appendChild(detailSection);

  const heading = createHeading("arlo", "Not Just Another Ramen Bar");
  detailSection.appendChild(heading);

  const tagline = createP("tagline", "Tagline Goes Here!");
  detailSection.appendChild(tagline);

  const orderLink = createLink("order", "Order Now");
  detailSection.appendChild(orderLink);

  const sectionPara = createSection("para");
  section.appendChild(sectionPara);

  const p = createP(
    "basicInfo",
    "Inspired by American Cuisine. Built on the principle that food tastes better in larger quantities.  For the vibrant community of Portland."
  );
  sectionPara.appendChild(p);
}

export default loadHome;
