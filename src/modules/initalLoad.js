//Creates the header HTML, appends an h1
function createHeader(id, text) {
  const header = document.createElement("header");
  header.setAttribute("id", id);
  const logo = document.createElement("h1");
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = text;
  logo.appendChild(a)
  header.appendChild(logo);
  return header;
}

//Creates a Tab
function createTabs(id, text) {
  const li = document.createElement("li");

  li.setAttribute("id", id);
  li.textContent = text;
  li.classList.add('tab')
  return li;
}

function createNav(id) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", id);

  const homeTab = createTabs("homeTab", "Home");
  const menuTab = createTabs("menuTab", "Menu");
  const aboutTab = createTabs("aboutTab", "About");

  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(aboutTab);

  return ul;
}

function createMain(id) {
  const main = document.createElement("main");
  main.setAttribute("id", id);
  return main;
}

function createFooter(id, text) {
  const footer = document.createElement("footer");
  footer.setAttribute("id", id);
  const h3 = document.createElement("h3");
  h3.textContent = text;
  footer.appendChild(h3);
  return footer;
}

function loadPage() {
  const content = document.getElementById("content");

  const header = createHeader("header", "Arlo");
  content.appendChild(header);

  const nav = createNav("nav");
  header.appendChild(nav);

  const main = createMain("main");
  content.appendChild(main);

  const footer = createFooter("footer", "Made by Rob");
  content.appendChild(footer);
}

export default loadPage;
