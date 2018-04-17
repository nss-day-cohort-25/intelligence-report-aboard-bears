const printRapsheet = () => {
  const article = document.querySelector("#main")
  const fragment = document.createDocumentFragment() 
  fragment.appendChild(h1builder())


  article.appendChild(fragment)
}

printRapsheet()