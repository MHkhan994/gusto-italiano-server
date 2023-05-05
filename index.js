const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

const chefs = require('./chefs.json')
const recipe = require('./recipe.json')
const reviews = require('./reviews.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipe)
})

app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.get('/recipes/:chef_id', (req, res) => {
    const id = req.params.chef_id
    const foundData = recipe.filter(r => r.chef_id === id)
    res.send(foundData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})