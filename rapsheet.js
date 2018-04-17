const rapsheetdata = {
  // H1
  "title": "Rap Sheet",
  // First Section
  "sections": [
    {
      "heading": "List of alleged crimes:",
      "list_items": [
        "California Gurls",
        "I Kissed a Girl",
        "Teenage Dream",
        "Last Friday Night (T.G.I.F.)",
        "Dark Horse",
        "Firework",
        "Roar",
        '<img src="https://assets.heart.co.uk/2010/41/katy-perry-august-2010-2-1286811979-view-1.jpg" alt="Katy Perry at her best" width="100px">',
        "Other musical crimes against humanity"
      ]
    },
    {
      "heading": "List of convictions:",
      "list-items": [
        '<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Katy Perry just dead ass made fun of Britney&#39;s breakdown not once, but TWICE on the red carpet. What a trash can.</p>&mdash; xoxo (@karmandabynes)<a href="https://twitter.com/karmandabynes/status/830941782284312576?ref_src=twsrc%5Etfw">February 13, 2017</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/katyperry?ref_src=twsrc%5Etfw">@katyperry</a> how a person so ugly and untalented still is famous escapes me. You stink</p>&mdash; michael perrins(@perrins_michael)<a href="https://twitter.com/perrins_michael/status/983474464963743745?ref_src=twsrc%5Etfw">April 9, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        '<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Singer Katy Perry (real name Katheryn Hudson) has Illuminati blood flowing through her veins. She is related to Charles M. Schwab.</p>&mdash; Bruxaria Alemã (@BruxariaNordica)<a href="https://twitter.com/BruxariaNordica/status/977440544199794688?ref_src=twsrc%5Etfw">March 24, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
      ]
    }, {
      "heading": "Prisons where suspect was incarcerated:",
      "list-items": [
        "Hello Katy Tour (1/23/09 - 11/28/09)",
        "California Dreams Tour (2/20/2011 - 1/22/12)",
        "Prismatic World Tour (5/7/14 - 10/18/15)",
        "Witness: The Tour (9/19/2017 - 8/21/2018)"
      ]
    },
    {
      "heading": "Witnesses to her crimes:",
      "list-items": [
        "Mary and Keith Hudson (Parents)",
        "Luke Bryan (American Idol co-judge)",
        "Lionel Richie (American Idol co-judge)",
        "Ryan Seacrest (American Idol host)",
        "People who fantasize about being a 19 year old alcoholic"
      ]
    },
    {
      "heading": "Victims, if any, of their crimes.",
      "list-items": [
        "American popular music (murdered after the release of \"I Kissed a Girl\")",
        "National Average IQ (decreased by 3 points due to Teenage Dream)",
        "All parents of teenage girls"
      ]
    }
  ]
}
// create fragment
const rapSheetFragment = document.createDocumentFragment()

// find selector of element to print to, assign to variable
const jsbuilder = document.querySelector("#jsbuilder")

// function to create page, attach to fragment
const rapSheetBuilder = () => {
  // create page title
  const h1element = document.createElement("h1")
  // attach database content as text to h1 element
  h1element.textContent = rapsheetdata.title
  // attach h1element to fragment
  rapSheetFragment.appendChild(h1element)
  // forEach to create sections

  let i = 0
  rapsheetdata.sections.forEach(() => {
    
    // create h2
    let h2element = document.createElement("h2")
    h2element.textContent = rapsheetdata.sections[i].heading
    rapSheetFragment.appendChild(h2element)
    
    // create ul
    let list = document.createAttribute("ul")
    
    // create li for each item
    rapsheetdata.sections[i].list_items.forEach(() => {
        // let article = document.createElement("li")
      })
      i++
  })
  jsbuilder.appendChild(rapSheetFragment)
}

// print fragment to page
// document.querySelector("#jsbuilder").appendChild(rapSheetFragment)

// call function to create page
rapSheetBuilder()