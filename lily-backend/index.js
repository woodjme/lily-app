const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(cors())
const port = 3000
const db = mysql.createConnection({
	host: process.env.DBHOST,
	user: process.env.DBUSER,
	password: process.env.DBPASS,
	database: process.env.DBNAME
})

app.get('/', (req, res) => {

	db.query('SELECT CURTIME() AS TIME', function (error, results, fields) {
		if (error) console.error(error)
		res.json({
			"time": results[0].TIME
		})
	})

})
app.listen(port, () => console.log(`Example app listening on port ${port}`))
