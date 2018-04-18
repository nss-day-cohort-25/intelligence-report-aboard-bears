const createCrimes = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  section.appendChild(createh2element("List of Alleged Crimes:"))
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
  const section = document.createElement("div")
  section.appendChild(createh2element("List of Convictions:"))
  let i = 0
  mainDatabase.convictions.forEach(() => {
    // section.appendChild(mainDatabase.convictions[i])
    section.insertAdjacentHTML('beforeend', mainDatabase.convictions[i]);
    i++
  })
  return section
}

const createPrisons = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  section.appendChild(createh2element("Prisons Where Suspect was Incarcerated:"))
  const list = document.createElement("ul")
  mainDatabase.incarceration.forEach(prison => {
    list.appendChild(createlielement(prison))
  });
  section.appendChild(list)

  return section
}

const createWitnesses = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  section.appendChild(createh2element("Witnesses to Her Crimes:"))
  const list = document.createElement("ul")
  mainDatabase.witnesses.forEach(witness => {
    list.appendChild(createlielement(witness))
  });
  section.appendChild(list)

  return section
}

const createVictims = () => {
  const article = document.querySelector("#main")
  const section = document.createElement("section")
  section.appendChild(createh2element("Victims of Her Crimes:"))
  const list = document.createElement("ul")
  mainDatabase.victims.forEach(victim => {
    list.appendChild(createlielement(victim))
  });
  section.appendChild(list)

  return section
}

