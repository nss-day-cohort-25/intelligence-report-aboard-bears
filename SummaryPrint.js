// function to create executive summary
const printSummary = () => {
    const article = document.querySelector("#main")
    const fragment = document.createDocumentFragment()
    fragment.appendChild(createMugshot())
    fragment.appendChild(createAssociates())
    fragment.appendChild(createAliases())
    fragment.appendChild(createCountry())
    article.appendChild(fragment)
}

printSummary()