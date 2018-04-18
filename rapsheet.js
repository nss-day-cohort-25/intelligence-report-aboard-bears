const createCrimes = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  

  const list = document.createElement("ul")
  mainDatabase.crimes.forEach(crime => {
    list.appendChild(createlielement(crime))
  });
  section.appendChild(list)

  return section
}

const createCrimePhoto = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  const createimgelement = (src, classname) => {
    const image = document.createElement("img")
    image.setAttribute("src", src)
    image.setAttribute("width", "200px")
    return image
  }

  section.appendChild(createimgelement(mainDatabase.crimephoto.image))

  return section
}

const createTweets = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  let i = 0
  mainDatabase.convictions.forEach(() => {
    section.insertAdjacentHTML('beforeend', ${mainDatabase.convictions[i]})
    i++
  })
  return section
}