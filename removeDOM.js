//function to clear everything inside the article tags of the dom
const nukeDOM = () => {
    const article = document.querySelector("article")
    while (article.firstChild) {
        article.removeChild(article.firstChild)
    }
}