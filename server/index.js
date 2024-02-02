const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

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

// WebSocket connection
io.on('connection', socket => {
	console.log('Client connected:', socket.id)

	socket.on('disconnect', () => {
		console.log('Client disconnected:', socket.id)
	})
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
			io.emit('userRegistered', { username, email, age })
			res.status(200).send('User registered successfully')
		}
	})
})

// Login endpoint
app.post('/login', (req, res) => {
	const { username, password } = req.body
	const sql = 'SELECT * FROM test WHERE username = ? AND password = ?'

	db.query(sql, [username, password], (err, results) => {
		if (err) {
			console.log('Error executing MySQL query:', err)
			res.status(500).send('Internal Server Error')
		} else {
			if (results.length > 0) {

				// Пользователь существует в базе данных

const user = results[0] // Предполагаем, что у вас есть только один пользователь с таким именем
res.status(200).json({
	username: user.username,
	age: user.age,
	email: user.email
	// Дополнительные данные о пользователе, которые вы хотите отправить
})        // res.status(200).json({
				// 	username: user.username,
				// 	age: user.age,
				// 	email: user.email,
        // });
			} else {
				// Пользователь не найден или пароль неверен
				res.status(401).send('Invalid username or password')
			}
		}
	})
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
