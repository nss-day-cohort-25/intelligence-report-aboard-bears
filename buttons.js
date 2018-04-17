//app to control navigation buttons

const summaryNav = document.querySelector("#summary")
const rapSheet = document.querySelector("#rap-sheet")
const newsFeed = document.querySelector("#news")
const finance = document.querySelector("#finance")

summaryNav.addEventListener("click", () => {
    nukeDOM()
    printSummary()
})

rapSheet.addEventListener("click", () => {
    nukeDOM()
})

newsFeed.addEventListener("click", () => {
    nukeDOM()
})

finance.addEventListener("click", () => {
    nukeDOM()
    finPageGen()
})