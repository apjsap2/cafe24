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
	res.render('index')
})

app.listen(PORT, () => {
	console.log(`Express listening on port ${PORT} now`)
})