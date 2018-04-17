//app to create elements and return elemenet with text content

const createh1element = (content) => {
    const element = document.createElement('h1')
    element.textContent = content
    return element
}
const createh2element = (content) => {
    const element = document.createElement('h2')
    element.textContent = content
    return element
}
const createh3element = (content) => {
    const element = document.createElement('h3')
    element.textContent = content
    return element
}
const createh4element = (content) => {
    const element = document.createElement('h4')
    element.textContent = content
    return element
}
const createh5element = (content) => {
    const element = document.createElement('h5')
    element.textContent = content
    return element
}
const createh6element = (content) => {
    const element = document.createElement('h6')
    element.textContent = content
    return element
}
const createpelement = (content) => {
    const element = document.createElement('p')
    element.textContent = content
    return element
}
const createlielement = (content) => {
    const element = document.createElement('li')
    element.textContent = content
    return element
}

//img elements
const createimgelement = (src, classname) => {
    const image = document.createElement("img")
    image.setAttribute("src", src)
    if (typeof classname !== undefined) {
        image.setAttribute("class", classname) 
    }
    return image
}
