

//create document fragment
const finDbFrag = document.createDocumentFragment()

//function to generate page
const finPageGen = () =>{

    const finGen = (database) => {
        
        //page title
        
        let title = document.createElement("div")
        title.appendChild(createh1element(database.pgtitle))

        database.stories.forEach(
            (story) => {
                //     <section>
                const storysection = document.createElement("section")
                
                // create story titles
                storysection.appendChild(createh2element(story.storytitle))
                
                //story content
                const storyUL = document.createElement("ul")
                storysection.appendChild(storyUL) 

                //create <li> for all text items
                for (let i = 0; i < story.storycontent.length; i++) {
                    storyUL.appendChild(createlielement(story.storycontent[i]))                
                }   
                //         <img src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmzRRT96y3Ls%2Fmaxresdefault.jpg&f=1" class="catcoin">
                //         <figcaption>Suspected Logo of "PerryCoin"</figcaption>
                for (let i = 0; i < story.storyImage.length; i++) {

                    storysection.appendChild(createimgelement(story.storyImage[i].img, story.storyImage[i].imgClass))

                    const imgtext = document.createElement("figcaption")
                    imgtext.textContent = story.storyImage[i].imgText
                    storysection.appendChild(imgtext)
                    
                }
                
                
                //append storys to title
                title.appendChild(storysection)
            }
        )

    
        finDbFrag.appendChild(title)
    }
    finGen(mainDatabase.financialDb)
    document.querySelector("#main").appendChild(finDbFrag)
}