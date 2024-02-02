// server/index.js

const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())

// MySQL connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Aziret090909a',
	database: 'myfirstdb'
})

db.connect(err => {
	if (err) {
		console.log('Error connecting to MySQL:', err)
	} else {
		console.log('Connected to MySQL database')
	}
})

// Registration endpoint
app.post('/register', (req, res) => {
	const { username, email, age, password } = req.body
	const sql =
		'INSERT INTO test (username, email, age, password) VALUES (?, ?, ?, ?)'
	db.query(sql, [username, email, age, password], (err, result) => {
		if (err) {
			console.log('Error executing MySQL query:', err)
			res.status(500).send('Internal Server Error')
		} else {
			console.log('User registered successfully')
			res.status(200).send('User registered successfully')
		}
	})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
