//app to build components for executive summary

const createMugshot = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    section.appendChild(createh1element("Known Threat: " + mainDatabase.mugshot.content))
    section.appendChild(createimgelement(mainDatabase.mugshot.image, "resize_bigger"))
    return section
}

const createAssociates = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    section.setAttribute("class", "knownAssociates")
    section.appendChild(createh2element("Known Associates"))

    mainDatabase.knownAssociates.forEach(associate => {
        let div = document.createElement("div")
        div.appendChild(createh4element(associate.name))

        div.appendChild(createpelement(associate.relation))

        div.appendChild(createimgelement(associate.image, "resize"))

        section.appendChild(div)
        
    });
    return section
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

const createCountry = () => {
    const article = document.querySelector("#main")
    const section = document.createElement("section")
    section.appendChild(createh2element("Country of Origin"))

    section.appendChild(createimgelement(mainDatabase.country.image, "resize_bigger"))
    
    return section
}