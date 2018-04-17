//maindatabase reference



const newsFeedDB = [
    //"recent criminal activity section"
    section = [
        headingImage = {
            type: "img",
            val: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1ILZ9eA8_LUtSplwQgyV52lCQz_hq3zjb5xVyzn_TwLY-hIx",
            class: null,
            id: "headingImage"
        },
        newsFeed = {
            type: "h1",
            val: null,
            class: null,
            id: "newsHeading"
        },
        h2CrimAct = {
            type: "h2",
            val: "Recent Criminal Activity",
            class: null,
            id: null
        },
        CriminalActList = {
            type: "ul",
            val: ["Slaughtered thousands of eardrums with unforeseeable radio plays", "Collaborating with Apple to conduct another U2 event", "Actively pursuing placement on seemingly innocuous playlists"],
            class: null,
            id: null
        },
        a = {
            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {
            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {
            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {
            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {
            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },
        a = {

            type: null,
            val: null,
            class: null,
            id: null
        },











                    
        
    ],





//"will it happen section"
section2 = [

],




    //"dirty details section"
    section3 = [

    ]






]

const ifMainTest = function (NF) {
    const articleINIT = document.createElement("article");
    const a = document.querySelector("body");
    const b = document.createDocumentFragment();
    b.appendChild(articleINIT);
    for (let index = 0; index < NF.length; index++) {
        //append a section to the DOM
        const sectionINIT = document.createElement("section")
        articleINIT.appendChild(sectionINIT)
        const NFTags = NF[index]
        for (let index = 0; index < NFTags.length; index++) {
            const sectionObjects = NFTags[index];
            //create images
            if (sectionObjects.type === "img") {
                const newImage = document.createElement("img")
                newImage.src = sectionObjects.val
                newImage.class = sectionObjects.class
                newImage.id = sectionObjects.id
                sectionINIT.appendChild(newImage)
            }
            //create h1
            if (sectionObjects.type === "h1") {
                const newH1 = document.createElement("h1")
                newH1.value = sectionObjects.val
                newH1.class = sectionObjects.class
                newH1.id = sectionObjects.id
                sectionINIT.appendChild(newH1)
            }
            //create h2
            if (sectionObjects.type === "h2") {
                const newH2 = document.createElement("h2")
                newH2.value = sectionObjects.val
                newH2.class = sectionObjects.class
                newH2.id = sectionObjects.id
                sectionINIT.appendChild(newH2)
            }
            // //create h3
            if (sectionObjects.type === "h3") {
                const newH2 = document.createElement("h3")
                newH3.value = sectionObjects.val
                newH3.class = sectionObjects.class
                newH3.id = sectionObjects.id
                sectionINIT.appendChild(newH3)
            }
            // //create ul
            if (sectionObjects.type === "ul") {
                const newUl = document.createElement("ul")
                const secVal = sectionObjects.val
                for (let index = 0; index < secVal.length; index++) {
                    const item = document.createElement("li")
                    const itemVal = secVal[index];
                    item.textContent = itemVal
                    newUl.appendChild(item)
                }
                newUl.class = sectionObjects.class
                newUl.id = sectionObjects.id
                sectionINIT.appendChild(newUl)
            }
            // //create br
            if (sectionObjects.type === "br") {
                const newBr = document.createElement("br")
                newP.class = sectionObjects.class
                newP.id = sectionObjects.id
                sectionINIT.appendChild(newBr)
            }
            // //create p
            if (sectionObjects.type === "p") {
                const newP = document.createElement("p")
                newP.class = sectionObjects.class
                newP.id = sectionObjects.id
                sectionINIT.appendChild(newP)
            }
        }


    }

    a.appendChild(b);
}

ifMainTest(newsFeedDB)


//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }

const ifMainTest = function (NF) {
        const articleINIT = document.createElement("article");
        const a = document.querySelector("body");
        a.appendChild(articleINIT);
        const b = document.createDocumentFragment()
        for (let index = 0; index < nf.length; index++) {
            //append a section to the DOM
            const sectionINIT = document.createElement("section")
        }

}
ifMainTest(newsFeedDB)


//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }