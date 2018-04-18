const printRapsheet = () => {
  const article = document.querySelector("#main")
  const fragment = document.createDocumentFragment()
  fragment.appendChild(createh1element("Rap Sheet"))
  fragment.appendChild(createCrimes())
  fragment.appendChild(createCrimePhoto())
  fragment.appendChild(createTweets())
  fragment.appendChild(createPrisons())
  fragment.appendChild(createWitnesses())
  fragment.appendChild(createVictims())
  article.appendChild(fragment)
}