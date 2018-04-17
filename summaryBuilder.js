//app to build components for executive summary

const createMugshot = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    const heading = document.createElement("h1")
    heading.textContent = "Known Threat: " + mainDatabase.mugshot.content 
    section.appendChild(heading)

    const image = document.createElement("img")
    image.setAttribute("src", mainDatabase.mugshot.image)
    image.classList = "resize"
    section.appendChild(image)

    article.appendChild(section)
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
    article.appendChild(section)
}

createMugshot()
createAssociates()