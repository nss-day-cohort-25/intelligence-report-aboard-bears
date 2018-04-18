//app to control navigation buttons

const summaryNav = document.querySelector("#summary")
const rapSheet = document.querySelector("#rap-sheet")
const newsFeed = document.querySelector("#news")
const finance = document.querySelector("#finance")

//functions to define colors for buttons
const setButtonCurrentPage = (buttonid) => {
    buttonid.style.background = "linear-gradient(pink, green)"
    buttonid.addEventListener("mouseover", () => {
    buttonid.style.background = "linear-gradient(green, pink)"
})
    buttonid.addEventListener("mouseout", () => {
    buttonid.style.background = "linear-gradient(pink, green)"
})
}

const takeButtonCurrentPage = (buttonid) => {
    buttonid.style.background = "linear-gradient(pink, cornflowerblue)"
    buttonid.addEventListener("mouseover", () => {
    buttonid.style.background = "linear-gradient(cornflowerblue, pink)"
})
    buttonid.addEventListener("mouseout", () => {
    buttonid.style.background = "linear-gradient(pink, cornflowerblue)"
})
}

setButtonCurrentPage(summaryNav)
takeButtonCurrentPage(rapSheet)
takeButtonCurrentPage(newsFeed)
takeButtonCurrentPage(finance)

//click event listeners
summaryNav.addEventListener("click", () => {
    nukeDOM()
    printSummary()

    setButtonCurrentPage(summaryNav)
    takeButtonCurrentPage(rapSheet)
    takeButtonCurrentPage(newsFeed)
    takeButtonCurrentPage(finance) 
})

rapSheet.addEventListener("click", () => {
    nukeDOM()


    takeButtonCurrentPage(summaryNav)
    setButtonCurrentPage(rapSheet)
    takeButtonCurrentPage(newsFeed)
    takeButtonCurrentPage(finance) 
})        

newsFeed.addEventListener("click", () => {
    nukeDOM()
    ifMainTest(newsFeedDB);
    
    takeButtonCurrentPage(summaryNav)
    takeButtonCurrentPage(rapSheet)
    setButtonCurrentPage(newsFeed)
    takeButtonCurrentPage(finance) 
})

finance.addEventListener("click", () => {
    nukeDOM()
    finPageGen()

    takeButtonCurrentPage(summaryNav)
    takeButtonCurrentPage(rapSheet)
    takeButtonCurrentPage(newsFeed)
    setButtonCurrentPage(finance) 
})