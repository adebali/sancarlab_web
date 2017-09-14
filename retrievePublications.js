// Make a request for a user with a given ID
let axios = require('axios')
let fs = require('fs')
let pmids = require('./static/publications/a_sancar_pmids.json')
// let pmids = require('./static/publications/pmids.json')
var ncbi = require('node-ncbi')

const pubmed = ncbi.pubmed

let ids = pmids
let results = []
let missedIdList = []

let file = fs.createWriteStream('./static/publications/publications.json')
let counter = 0

function parsePubmedObject (pubmedObject) {
  return {
    pmid: pubmedObject.uid,
    title: pubmedObject.title,
    authors: pubmedObject.authors,
    pubYear: pubmedObject.pubdate.split(' ')[0],
    journal: pubmedObject.fulljournalname,
    volume: pubmedObject.volume,
    issue: pubmedObject.issue,
    pages: pubmedObject.pages,
    doi: pubmedObject.elocationid.split('doi: ')[1],
    sortpubdate: pubmedObject.sortpubdate
  }
}

function compare (a, b) {
  if (a.sortpubdate < b.sortpubdate)
    return 1
  if (a.sortpubdate > b.sortpubdate)
    return -1
  return 0
}

function simplifyPublications (pubmedObjectList) {
  // console.log(pubmedObjectList.length)
  let simplifiedObjectList = []
  pubmedObjectList.forEach(function (pubmedObject) {
    simplifiedObjectList.push(parsePubmedObject(pubmedObject))
  })
  // console.log(simplifiedObjectList.length)
  return simplifiedObjectList.sort(compare)
  // return simplifiedObjectList
}

function writeResults (results, missedIdList) {
  file.write(JSON.stringify(results, null, 4))
  // let missedIds = fs.createWriteStream('./static/publications/missedIds.txt')
  // missedIds.write(id + '\n')
}
// pubmed.summary(20517925).then((paper) => {
//   console.log(paper)
// })

ids.forEach(function(id, idIndex) {

  // pubmed.summary(id).then((paper) => {
  //   console.log(paper)
  // })
  axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${id}&retmode=json&tool=sancarlab&email=sancarlab@gmail.com`)
  .then(function (response) {
      counter += 1
      let publication = response.data.result[[id]]
      results.push(publication)
      console.log(counter)
      if (counter === ids.length) {
        writeResults(simplifyPublications(results), missedIdList)
      }
    })
    .catch(function (error) {
      counter += 1
      missedIdList.push(id)
      console.log(error)
    })

  }, this)
