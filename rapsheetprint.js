const printRapsheet = () => {
  const article = document.querySelector("#main")
  const fragment = document.createDocumentFragment()
  fragment.appendChild(createh1element("Rap Sheet"))
  fragment.appendChild(createh2element("List of Alleged Crimes:"))
  fragment.appendChild(createCrimes())
  fragment.appendChild(createCrimePhoto())
  fragment.appendChild(createh2element("List of Convictions:"))
  fragment.appendChild(createTweets())
  console.log("checking!")
  article.appendChild(fragment)
}