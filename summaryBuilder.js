//app to build components for executive summary

const createMugshot = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    const heading = document.createElement("h1")
    heading.textContent = "Known Threat: " + mainDatabase.mugshot.content 
    section.appendChild(heading)

    const image = document.createElement("img")
    image.setAttribute("src", mainDatabase.mugshot.image)
    image.classList = "resize_bigger"
    section.appendChild(image)

    return section
}

const createAssociates = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    section.setAttribute("class", "knownAssociates")
    const heading = document.createElement("h2")
    heading.textContent = "Known Associates"
    section.appendChild(heading)

    mainDatabase.knownAssociates.forEach(associate => {
        let div = document.createElement("div")
        let header = document.createElement("h4")
        header.textContent = associate.name
        div.appendChild(header)

        let relation = document.createElement("p")
        relation.textContent = associate.relation
        div.appendChild(relation)

        let image = document.createElement("img")
        image.setAttribute("src", associate.image)
        image.setAttribute("class", "resize")
        div.appendChild(image)

        section.appendChild(div)
        
    });
    return section
}

const createAliases = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    const heading = document.createElement("h2")
    heading.textContent = "Known Aliases"
    section.appendChild(heading)

    const list = document.createElement("ul")
    mainDatabase.aliases.forEach(alias => {
        let listElement = document.createElement("li")
        listElement.textContent = alias
        list.appendChild(listElement)
    });
    section.appendChild(list)

    return section
}

const createCountry = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    const heading = document.createElement("h2")
    heading.textContent = "Country of Origin"

    const image = document.createElement("img")
    image.setAttribute("src", mainDatabase.country.image)
    image.setAttribute("class", "resize_bigger")
    section.appendChild(image)
    
    return section
}