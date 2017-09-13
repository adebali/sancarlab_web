// Make a request for a user with a given ID
let axios = require('axios')
let fs = require('fs')
let promiseForeach = require('promise-foreach')


ids = ['28607063', '28607063']
let results = []

let file = fs.createWriteStream('publication.json');

ids.forEach(function(id, idIndex) {
  axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${id}&retmode=json&tool=my_tool&email=my_email@example.com`)
  .then(function (response) {
    let publication = response.data.result[[id]]
    results.push(publication)
    console.log(idIndex)
    if (idIndex >= ids.length - 1) {
      console.log(results.length)
      // file.write(JSON.stringify(results))
    }
    // console.log(results)
    })
    .catch(function (error) {
      console.log(error)
    })

  }, this)


promiseForeach(ids,
  id => {
    return '5'
  },
  (arrResult, id) => {

  }
)

