const databaseList = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1ILZ9eA8_LUtSplwQgyV52lCQz_hq3zjb5xVyzn_TwLY-hIx",
    "Feed",
    "Recent Criminal Activity",
    ["Slaughtered thousands of eardrums with unforeseeable radio plays","Collaborating with Apple to conduct another U2 event","Actively pursuing placement on seemingly innocuous playlists"],
    "https://i.ytimg.com/vi/TiKJ7X2wqcc/maxresdefault.jpg",
    "Will It Happen to YOU?",            
    null,
    "90%",
    "Though Apple took lots of flack for their involvement with U2, they seem to have taken a malicious turn since the loss of their zen founder. They do have to keep the books in the black but this horrible concept appeals to their inherent depravity. God help those of you with Macs and iPhones. It is less likely to happen, but there is absolutely nothing you can do if you are an Apple user. You'll never swap Android, so just take this one on the chin and avoid using the standard music player with apps like Spotify.",
    null,
    "3%",
    "I mean, you aren't listening to playlists with music that could be associated with someone this truly horrendous so this is an area of least concern. Try to avoid anything related to Disney or targeted toward tweens and there shouldn't be an issue. In any case, simply be aware that this could affect friends and family members. Remain vigilant and protect your eardrums.",
    null,
    "http://www1.pictures.zimbio.com/gi/Katy+Perry+Katy+Perry+Visits+Radio+Morning+l7nZABa7_qul.jpg",
    "https://pbs.twimg.com/media/Bx4rp0JIYAAKuFa.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBwykVuDbxiI/v5/640x-1.jpg",
    "Dirty Details",
    "Conducts an Ongoing Career of Terrorism",
    "There appears to be no end in sight but the benchmark acts of violence occurred on:",
    ["June 17, 2008; One of the Boys", "August 24, 2010; Teenage Dream", "October 18, 2013; Prism", "June 9, 2017; Witness"],
    "https://img00.deviantart.net/e832/i/2012/174/d/c/katy_perry_albums_png_pack_updated_6_22_12_by_katycatriley-d54jjqf.jpg",
    "Almost Nowhere Remains Unaffected",
    "https://i.ytimg.com/vi/vlzhD9lIt58/maxresdefault.jpg",
    "Though it may feel ubiquitous in its scope, there are some areas that have escaped her influence. Here are a few:",
    ["Cambodia", "Swaziland", "Madagascar (WAIT NO SHE'S ON THE SOUNDTRACK)", "Tuvalu", "Uzbekistan", "Agency Investigation of Crimes"],
    "Agency Investigation of Crimes",
    "Everyone has been affected in acts ranging from mental abuse to physical harm, from financial losses direct and indirect, and all have scars that will linger as reminders. Every agency with investigative powers has become involved. Official investigations are ongoing in:",
    "https://cdn.sovereignman.com/wp-content/uploads/2014/11/Federal-Agency-Logos.png",
    ["FBI", "CIA", "FDA", "NORAD", "DOD", "QWERTY", "DOL", "DOS", "DOH", "Her Victims and Witnesses"],
    "Her Victims and Witnesses",
    "https://pbs.twimg.com/profile_images/824716853989744640/8Fcd0bji_400x400.jpg",
    "If I was to tell you who was affected, I would do so best with the words of another. \"He was Edmond Dantés... and he was my father. And my mother... my brother... my friend. He was you... and me. He was all of us.\" - Evey Hammond",
]

const newsFeedDB = [
    //"recent criminal activity section"
        headingImage = {
            type: "img",
            val: "",
            class: null,
            id: "headingImage"
        },
        newsFeed = {
            type: "h1",
            val: "",
            class: null,
            id: "newsHeading"
        },
        h2CrimAct = {
            type: "h2",
            val: "",
            class: null,
            id: null
        },
        CriminalActList = {
            type: "ul",
            val: "",
            class: null,
            id: null
        },

        CrimeListImg = {
            type: "image",
            val: "",
            class: "image",
            id: null
        },
    //"will it happen section"
        willItHappenHead = {
            type: "h2",
            val: "",
            class: null,
            id: null
        },
        willItBreak = {
    
            type: "br",
            val: "",
            class: null,
            id: null
        },
        willItNine = {
            type: "h3",
            val: "",
            class: "willItHappen",
            id: null
        },
        willItNineP = {
            type: "p",
            val: "",
            class: "willItHappen",
            id: null
        },
        willItNineBr = {
            type: "br",
            val: "",
            class: null,
            id: null
        },
        ThreePer = {
            type: "h3",
            val: "",
            class: "willItHappen",
            id: null
        },
        threePerP = {
    
            type: "p",
            val: "",
            class: "willItHappen",
            id: null
        },
        threePerBr = {
    
            type: "br",
            val: "",
            class: null,
            id: null
        },
        KPRadioImg = {
    
            type: "img",
            val: "",
            class: "image",
            id: null
        },
        PBSImg = {
    
            type: "img",
            val: "",
            class: "image",
            id: null
        },
        assetsImg = {
    
            type: "img",
            val: "",
            class: null,
            id: "taller"
        },
        //"dirty details section"
        dirtyTitle = {
            type: "h2",
            val: "",
            class: null,
            id: null
        },
        conductTerror = {
    
            type: "h3",
            val: "",
            class: null,
            id: null
        },
        terrorP = {
    
            type: "p",
            val: "",
            class: null,
            id: null
        },
        terrorList = {
    
            type: "ul",
            val: "",
            class: null,
            id: null
        },
        terrorImg = {
    
            type: "img",
            val: "",
            class: "image",
            id: null
        },
        nowhereTitle = {
    
            type: "h3",
            val: "",
            class: null,
            id: null
        },
        nowhereImg = {
    
            type: "img",
            val: "",
            class: "image",
            id: null
        },
        nowhereP = {
    
            type: "p",
            val: "",
            class: null,
            id: null
        },
        nowhereList = {
    
            type: "ul",
            val: "",
            class: null,
            id: null
        },
        investHeader = {
    
            type: "h3",
            val: "",
            class: null,
            id: null
        },
        investP = {
    
            type: "p",
            val: "",
            class: null,
            id: null
        },
        investImg = {
    
            type: "img",
            val: "",
            class: "image",
            id: null
        },
        investList = {
    
            type: "ul",
            val: "",
            class: null,
            id: null
        },
        herVicHead = {
    
            type: "h3",
            val: "",
            class: null,
            id: null
        },
        herVicImg = {
    
            type: "img",
            val: "",
            class: null,
            id: null
        },
        herVicP = {
    
            type: "p",
            val: "",
            class: null,
            id: null
        },
    ]

for (let index = 0; index < newsFeedDB.length; index++) {
    newsFeedDB[index].val = databaseList[index]
}
console.log(newsFeedDB)

const ifMainTest = function (NF) {
    const article = document.querySelector("#main");
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < NF.length; index++) {
        //append a section to the DOM
        const sectionINIT = document.createElement("section")

        const sectionObjects = NF[index]
        fragment.appendChild(sectionINIT)

        
            //create images
            if (sectionObjects.type === "img") {
                const newImage = document.createElement("img")
                newImage.src = sectionObjects.val
                newImage.className = sectionObjects.class
                newImage.id = sectionObjects.id
                newImage.className += " resize"
                sectionINIT.appendChild(newImage)
            }
            //create h1
            if (sectionObjects.type === "h1") {
                const newH1 = document.createElement("h1")
                newH1.textContent = sectionObjects.val
                newH1.className = sectionObjects.class
                newH1.id = sectionObjects.id
                sectionINIT.appendChild(newH1)
            }
            //create h2
            if (sectionObjects.type === "h2") {
                const newH2 = document.createElement("h2")
                newH2.textContent = sectionObjects.val
                newH2.className = sectionObjects.class
                newH2.id = sectionObjects.id
                sectionINIT.appendChild(newH2)
            }
            // //create h3
            if (sectionObjects.type === "h3") {
                const newH3 = document.createElement("h3")
                newH3.textContent = sectionObjects.val
                newH3.className = sectionObjects.class
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
                newUl.className = sectionObjects.class
                newUl.id = sectionObjects.id
                sectionINIT.appendChild(newUl)
            }
            // //create br
            if (sectionObjects.type === "br") {
                const newBr = document.createElement("br")
                newBr.className = sectionObjects.class
                newBr.id = sectionObjects.id
                sectionINIT.appendChild(newBr)
            }
            // //create p
            if (sectionObjects.type === "p") {
                const newP = document.createElement("p")
                newP.textContent = sectionObjects.val
                newP.className = sectionObjects.class
                newP.id = sectionObjects.id
                sectionINIT.appendChild(newP)
            }
        

    }

    article.appendChild(fragment);
}




//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }

// const ifMainTest = function (NF) {
//         const fragment = document.createElement("article");
//         const a = document.querySelector("body");
//         a.appendChild(fragment);
//         const b = document.createDocumentFragment()
//         for (let index = 0; index < nf.length; index++) {
//             //append a section to the DOM
//             const sectionINIT = document.createElement("section")
//         }

// }



//primary construction initiation
// const newsFeedConstructor = function (mainDBArray) {
//     const ifMain = function if (element === newsFeedDB) {





//     }
// //fires up constructor
//     mainDBArray.forEach (newsFeedConstructor(element))
// }