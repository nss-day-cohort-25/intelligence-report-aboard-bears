

//create document fragment
const finDbFrag = document.createDocumentFragment()

//function to generate page
const finPageGen = () =>{

    const finGen = (database) => {
        // <div>
        //         <h1>Katy Perry Financial Interests </h1>
        // </div>
        let title = document.createElement("div")

        const heading = document.createElement("h1")
        heading.textContent = database.pgtitle
        title.appendChild(heading)

        //function to iterate through stories section of db

        database.stories.forEach(
            (story) => {
                //     <section>
                const storysection = document.createElement("section")
                
                //         <h2>Financial Holdings </h2>
                const storytitle = document.createElement("h2")
                storytitle.textContent = story.storytitle
                storysection.appendChild(storytitle)
                
                //         <ul>
                const storyUL = document.createElement("ul")
                storysection.appendChild(storyUL) 

                //create <li> for all text items
                for (let i = 0; i < story.storycontent.length; i++) {
                    const storyContent = document.createElement("li")
                    storyContent.textContent = story.storycontent[i]
                    storyUL.appendChild(storyContent)                
                }   
                //         <img src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmzRRT96y3Ls%2Fmaxresdefault.jpg&f=1" class="catcoin">
                //         <figcaption>Suspected Logo of "PerryCoin"</figcaption>
                for (let i = 0; i < story.storyImage.length; i++) {
                    const storyImg = document.createElement("img")
                    storyImg.src = story.storyImage[i].img
                    storyImg.classList = story.storyImage[i].imgClass
                    const imgtext = document.createElement("figcaption")
                    imgtext.textContent = story.storyImage[i].imgText
                    

                    storysection.appendChild(storyImg)
                    storysection.appendChild(imgtext)
                    
                }
                
                
                //append storys to title
                title.appendChild(storysection)
            }
        )

    
        finDbFrag.appendChild(title)
    }
    finGen(mainDatabase.financialDb)
    document.querySelector("#report").appendChild(finDbFrag)
}