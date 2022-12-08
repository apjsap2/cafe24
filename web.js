const express = require('express')
const path = require('path')
const app = express()
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')
const PORT = 8001;



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate)
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))




app.get('/', (req, res) => {
	cssUrl = 'none'
	jsUrl = 'none'
	res.render('welcomepage', {cssUrl})
})

app.get('/siwoo/simulator', (req, res) => {
	const cssUrl = '/css/siwoosimulator.css'
	const jsUrl = '/js/siwoosimulator.js'
	res.render('siwoosimulator', {cssUrl, jsUrl})
})

app.listen(PORT, () => {
	console.log(`Express listening on port ${PORT} now`)
})