const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Happy Hacking!').end()
})




app.listen(5000, console.log('Listening on port: 5000'))
