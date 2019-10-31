const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { city } = req.body

  weatherRequest(city)
  res.render('index')
})

// 1239d38c25b99afa42c6d427af813b77

app.listen(3000, () => {
  console.log('Server has started on port 3000')
})