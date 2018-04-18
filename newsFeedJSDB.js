//maindatabase reference



//DEAL W/ LIST ITEMS


const databaseTrial = {
    newsFeedSection: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1ILZ9eA8_LUtSplwQgyV52lCQz_hq3zjb5xVyzn_TwLY-hIx",

        "Feed",

        "Recent Criminal Activity",

        "Slaughtered thousands of eardrums with unforeseeable radio plays",

        "Collaborating with Apple to conduct another U2 event",

        "Actively pursuing placement on seemingly innocuous playlists",

        "https://i.ytimg.com/vi/TiKJ7X2wqcc/maxresdefault.jpg"],

    willItHappenSection: [

        "Will It Happen to YOU?",

        "90%",

        "Though Apple took lots of flack for their involvement with U2, they seem to have taken a malicious turn since the loss of their zen founder. They do have to keep the books in the black but this horrible concept appeals to their inherent depravity. God help those of you with Macs and iPhones. It is less likely to happen, but there is absolutely nothing you can do if you are an Apple user. You'll never swap Android, so just take this one on the chin and avoid using the standard music player with apps like Spotify.",

        "3%",

        "I mean, you aren't listening to playlists with music that could be associated with someone this truly horrendous so this is an area of least concern. Try to avoid anything related to Disney or targeted toward tweens and there shouldn't be an issue. In any case, simply be aware that this could affect friends and family members. Remain vigilant and protect your eardrums.",

        "http://www1.pictures.zimbio.com/gi/Katy+Perry+Katy+Perry+Visits+Radio+Morning+l7nZABa7_qul.jpg",

        "https://pbs.twimg.com/media/Bx4rp0JIYAAKuFa.jpg",

        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBwykVuDbxiI/v5/640x-1.jpg"],
    
    dirtyDetailsSection: [

        "Dirty Details",

        "Conducts an Ongoing Career of Terrorism",

        "There appears to be no end in sight but the benchmark acts of violence occurred on:",

        "June 17, 2008; One of the Boys",

        "August 24, 2010; Teenage Dream",

        "October 18, 2013; Prism",

        "June 9, 2017; Witness",

        "Almost Nowhere Remains Unaffected",

        "https://i.ytimg.com/vi/vlzhD9lIt58/maxresdefault.jpg",

        "Though it may feel ubiquitous in its scope, there are some areas that have escaped her influence. Here are a few:",

        "Cambodia",

        "Swaziland",

        "Madagascar (WAIT NO SHE'S ON THE SOUNDTRACK)",

        "Tuvalu",

        "Uzbekistan",

        "Agency Investigation of Crimes",

        "Everyone has been affected in acts ranging from mental abuse to physical harm, from financial losses direct and indirect, and all have scars that will linger as reminders. Every agency with investigative powers has become involved. Official investigations are ongoing in:",

        "https://cdn.sovereignman.com/wp-content/uploads/2014/11/Federal-Agency-Logos.png",

        "FBI",

        "CIA",

        "FDA",

        "NORAD",

        "DOD",

        "QWERTY",

        "DOL",

        "DOS",

        "DOH",

        "Her Victims and Witnesses",

        "https://pbs.twimg.com/profile_images/824716853989744640/8Fcd0bji_400x400.jpg",

        "If I was to tell you who was affected, I would do so best with the words of another. \"He was Edmond Dantés... and he was my father. And my mother... my brother... my friend. He was you... and me. He was all of us.\" - Evey Hammond"]
}


const newsFeedFormat = [
    //"recent criminal activity section"
    headingImage = {
        type: "img",
        class: null,
        id: "headingImage"
    },
    newsFeed = {
        type: "h1",
        class: null,
        id: "newsHeading"
    },
    h2CrimAct = {
        type: "h2",
        class: null,
        id: null
    },
    CriminalActList = {
        type: "ul",
        class: null,
        id: null
    },
    caLi1 = {
        type: "ul",
        class: null,
        id: null
    },
    caLi2 = {
        type: "ul",
        class: null,
        id: null
    },
    caLi3 = {
        type: "ul",
        class: null,
        id: null
    },
    CrimeListImg = {
        type: "image",
        class: "image",
        id: null
    },
//"will it happen section"
    willItHappenHead = {
        type: "h2",
        class: null,
        id: null
    },
    willItBreak = {

        type: "br",
        class: null,
        id: null
    },
    willItNine = {
        type: "h3",
        class: "willItHappen",
        id: null
    },
    willItNineP = {
        type: "p",
        class: "willItHappen",
        id: null
    },
    willItNineBr = {
        type: "br",
        class: null,
        id: null
    },
    ThreePer = {
        type: "h3",
        class: "willItHappen",
        id: null
    },
    threePerP = {

        type: "p",
        class: "willItHappen",
        id: null
    },
    threePerBr = {

        type: "br",
        class: null,
        id: null
    },
    KPRadioImg = {

        type: "img",
        class: "image",
        id: null
    },
    PBSImg = {

        type: "img",
        class: "image",
        id: null
    },
    assetsImg = {

        type: "img",
        class: null,
        id: "taller"
    },
    //"dirty details section"
    dirtyTitle = {
        type: "h2",
        class: null,
        id: null
    },
    conductTerror = {

        type: "h3",
        class: null,
        id: null
    },
    terrorP = {

        type: "p",
        class: null,
        id: null
    },
    terrorList = {

        type: "ul",
        class: null,
        id: null
    },
    terrorLi1 = {
        type: "ul",
        class: null,
        id: null
    },
    terrorLi2 = {
        type: "ul",
        class: null,
        id: null
    },
    terrorLi3 = {
        type: "ul",
        class: null,
        id: null
    },
    terrorLi4 = {
        type: "ul",
        class: null,
        id: null
    },
    terrorImg = {

        type: "img",
        class: "image",
        id: null
    },
    nowhereTitle = {

        type: "h3",
        class: null,
        id: null
    },
    nowhereImg = {

        type: "img",
        class: "image",
        id: null
    },
    nowhereP = {

        type: "p",
        class: null,
        id: null
    },
    nowhereList = {

        type: "ul",
        class: null,
        id: null
    },
    nowhereLi1 = {
        type: "ul",
        class: null,
        id: null
    },
    nowhereLi2 = {
        type: "ul",
        class: null,
        id: null
    },
    nowhereLi3 = {
        type: "ul",
        class: null,
        id: null
    },
    nowhereLi4 = {
        type: "ul",
        class: null,
        id: null
    },
    nowhereLi5 = {
        type: "ul",
        class: null,
        id: null
    },
    investHeader = {

        type: "h3",
        class: null,
        id: null
    },
    investP = {

        type: "p",
        class: null,
        id: null
    },
    investImg = {

        type: "img",
        class: "image",
        id: null
    },
    investList = {

        type: "ul",
        class: null,
        id: null
    },
    investLi1 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi2 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi3 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi4 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi5 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi6 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi7 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi8 = {
        type: "ul",
        class: null,
        id: null
    },
    investLi9 = {
        type: "ul",
        class: null,
        id: null
    },
    herVicHead = {

        type: "h3",
        class: null,
        id: null
    },
    herVicImg = {

        type: "img",
        class: null,
        id: null
    },
    herVicP = {

        type: "p",
        class: null,
        id: null
    },
    ]




const ifMainTest = function (NF, format) {
    const articleINIT = document.createElement("article");
    //create body reference to anch the section to hte html DOM
    const a = document.querySelector("body");
    //frag for attach
    const b = document.createDocumentFragment();
    //attach the article to the frag
    b.appendChild(articleINIT);
    //using key to create an array the length can be extracted from
    const NFArray = Object.keys(NF)
    const vals = []
    //create a section for each section of the daatabase which is divided by the section elements in the HTML model
    for (let index = 0; index < NFArray.length; index++) {
        //append a section to the DOM
        const sectionINIT = document.createElement("section")
        //append the section to the outermost article tag
        articleINIT.appendChild(sectionINIT)
        vals.push(NFArray[index])
    }
    if (vals.length !== format.length) {
        console.log("check your format");
    }
    else {
        for (let index = 0; index < format.length; index++) {
            const sectionObjects = format[index];
            sectionObjects.val = vals[index]
            //ul creation
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
            }
            //li creation
            if (sectionObjects.type === li) {
                const newLi = document.createElement("li")
                newLi.textContent = sectionObjects.val
                newLi.class = sectionObjects.class
                newLi.id = sectionObjects.id
                newUl.append(newLi)
            }
            if (sectionObjects.type !== li) {
                sectionINIT.appendChild(newUl)
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
                    newH1.textContent = sectionObjects.val
                    newH1.class = sectionObjects.class
                    newH1.id = sectionObjects.id
                    sectionINIT.appendChild(newH1)
                }
                //create h2
                if (sectionObjects.type === "h2") {
                    const newH2 = document.createElement("h2")
                    newH2.textContent = sectionObjects.val
                    newH2.class = sectionObjects.class
                    newH2.id = sectionObjects.id
                    sectionINIT.appendChild(newH2)
                }
                // //create h3
                if (sectionObjects.type === "h3") {
                    const newH3 = document.createElement("h3")
                    newH3.textContent = sectionObjects.val
                    newH3.class = sectionObjects.class
                    newH3.id = sectionObjects.id
                    sectionINIT.appendChild(newH3)
                }
                // //create ul add li handler
                
                // //create br
                if (sectionObjects.type === "br") {
                    const newBr = document.createElement("br")
                    newBr.class = sectionObjects.class
                    newBr.id = sectionObjects.id
                    sectionINIT.appendChild(newBr)
                }
                // //create p
                if (sectionObjects.type === "p") {
                    const newP = document.createElement("p")
                    newP.textContent = sectionObjects.val
                    newP.class = sectionObjects.class
                    newP.id = sectionObjects.id
                    sectionINIT.appendChild(newP)
                }
            }
        }
            
            
    
            
    a.appendChild(b);
        
    }
}
    
   
//  || section.objects[index + 1]











ifMainTest(databaseTrial, newsFeedFormat)


//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }

// const ifMainTest = function (NF) {
//         const articleINIT = document.createElement("article");
//         const a = document.querySelector("body");
//         a.appendChild(articleINIT);
//         const b = document.createDocumentFragment()
//         for (let index = 0; index < nf.length; index++) {
//             //append a section to the DOM
//             const sectionINIT = document.createElement("section")
//         }

// }
// ifMainTest(newsFeedDB)


//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }