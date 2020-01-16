const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req,res) => {
    res.render('index', {
        what: 'what is this'
    })
})

app.post('', (req,res) => {
    console.log(req.body.mytext)
    res.render('index', {
        what: 'what is that'
    })
})

app.get('/myform', (req,res) => {
    res.send('myform')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port + '. http://localhost:' + port) 
})