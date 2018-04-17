const h1builder = () => {
  // create page title"
  const h1element = document.createElement("h1")
  // attach database content as text to h1 element
  h1element.textContent = "Rap Sheet"
  // attach h1element to fragment
  rapSheetFragment.appendChild(h1element)
}

const createAliases = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  section.appendChild(createh2element("Known Aliases"))

  const list = document.createElement("ul")
  mainDatabase.aliases.forEach(alias => {
      list.appendChild(createlielement(alias))
  });
  section.appendChild(list)

  return section
}