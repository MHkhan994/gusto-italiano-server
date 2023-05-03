const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

const chefs = require('./chefs.json')
const recipe = require('./recipe.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send(chefs)
})

app.get('/recipes', (req, res) => {
    res.send(recipe)
})

app.get('/recipes/:chef_id', (req, res) => {
    const id = req.params.chef_id
    const foundData = recipe.filter(r => r.chef_id === id)
    res.send(foundData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})