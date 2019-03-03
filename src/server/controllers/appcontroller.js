const axios = require('axios')
const config = require('config');
const csv = require('csvtojson');
const path = require('path')

const csvFilePath = path.join(__dirname, '../sample_data.csv')
function check(req, res) {
  res.send('OK')
}


function getMe(req, res) {
  let from = req.query.from
  let to = req.query.to
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      let result = jsonObj
      let payload = {
        "status": true,
        "count": result.length,
        "payload": result.slice(from, to)
      }
      res.status(200).json(payload)
    })

}

function search(req, res) {
  let {q,from,to} = req.query;
  csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      let result = jsonObj
      let filtered = result.filter((v)=>v.Name.startsWith(q))
      let payload = {
        "status": true,
        "count": filtered.length,
        "payload": filtered.slice(from,to)
      }
      res.status(200).json(payload)
    })

}

module.exports = {
  getMe,
  check,
  search
}