//app to control navigation buttons

const summaryNav = document.querySelector("#summary")
const rapSheet = document.querySelector("#rap-sheet")
const newsFeed = document.querySelector("#news")
const finance = document.querySelector("#finance")

summaryNav.style.background = "linear-gradient(#eb94d0, green)"


summaryNav.addEventListener("click", () => {
    nukeDOM()
    printSummary()
    summaryNav.style.background = "linear-gradient(#eb94d0, green)"
    rapSheet.style.background = "linear-gradient(#eb94d0, #2079b0)"
    newsFeed.style.background = "linear-gradient(#eb94d0, #2079b0)"
    finance.style.background = "linear-gradient(#eb94d0, #2079b0)"
})

rapSheet.addEventListener("click", () => {
    nukeDOM()


    summaryNav.style.background = "linear-gradient(#eb94d0, #2079b0)"
    rapSheet.style.background = "linear-gradient(#eb94d0, green)"
    newsFeed.style.background = "linear-gradient(#eb94d0, #2079b0)"
    finance.style.background = "linear-gradient(#eb94d0, #2079b0)"
})

newsFeed.addEventListener("click", () => {
    nukeDOM()

    
    summaryNav.style.background = "linear-gradient(#eb94d0, #2079b0)"
    rapSheet.style.background = "linear-gradient(#eb94d0, #2079b0)"
    newsFeed.style.background = "linear-gradient(#eb94d0, green)"
    finance.style.background = "linear-gradient(#eb94d0, #2079b0)"
})

finance.addEventListener("click", () => {
    nukeDOM()
    finPageGen()

    summaryNav.style.background = "linear-gradient(#eb94d0, #2079b0)"
    rapSheet.style.background = "linear-gradient(#eb94d0, #2079b0)"
    newsFeed.style.background = "linear-gradient(#eb94d0, #2079b0)"
    finance.style.background = "linear-gradient(#eb94d0, green)"
})