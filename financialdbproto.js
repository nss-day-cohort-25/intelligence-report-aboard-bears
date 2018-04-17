const mainDatabase = {}
mainDatabase.financialDb = {
    // this would be the H1 component
    pgtitle:"Katy Perry Financial Interests",
    // stories would probalby be each linked to a <section>
    stories:[
        {
            // storytitle would be an h2    
            storytitle:"Financial Holdings",
            // drop story content into a ul and foreach into li components
            storycontent:[
                "Unknown number of foreign bank accounts, often under nested shell companies", 
                "Suspected holdings of large values Cryptocurrencies. Rumors are circulating about a new PerryCoin offering.",
                "Suspected to have convinced her most die hard fan, Steve Brownlee, of NSS, to help with the development."
            ],
            //storyimage img to a img tag and imgtext to 
            storyImage:[{
                img:"https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmzRRT96y3Ls%2Fmaxresdefault.jpg&f=1",
                imgText:"Suspected Logo of \"PerryCoin\"",
                imgClass:"catcoin"
            }]
        },
        {
            storytitle: "Money Laundering",
            storycontent:[
                "Launders money through though elaborate scheme of inflating number of album sales.",
                "All research indicates no one would actually buy one of her albums."
            ],
            storyImage:[]
        },
        {
            storytitle:"Tax Evasion",
            storycontent:[
                "Created falsified documents that showed that she had donated Massive Sums of money to the NSS program in order to evade taxes.",
                "IRS Audit pending, will cost NSS dozens of dollars of lost time to complete audit."
            ],
            storyImage:[]
        }
    ]
}