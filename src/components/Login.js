import React, { useState } from 'react'
import axios from 'axios'
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
	const dispatch = useDispatch()
	const [loginData, setLoginData] = useState({
		username: '',
		password: ''
	})
	const nav = useNavigate()

	const handleChange = e => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		// console.log(loginData.username)
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:5000/login',
				loginData
			)
			console.log(response)
			// console.log(response.config.data.username)
			// console.log(response.data.username)
			// Действия после успешного логина, например, перенаправление на другую страницу
			alert('Login successful')

			nav('/cureful')
			dispatch({
				type: 'USER',
				payload: {
					username: response.data.username,
					age: response.data.age,
					email: response.data.email
				}
			})
			// Возможно, у вас есть дополнительная логика для обработки успешного входа
		} catch (error) {
			alert('Login unsuccessful')
			// alert('Login dont successful')
			console.error('Error logging in:', error)
		}
	}

	return (
		<div className='flex items-center justify-center mt-10 flex-col gap-3 '>
			<form onSubmit={handleSubmit}>
				<div className='mb-2'>
					<label>
						Username:
						<input
							type='text'
							name='username'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={loginData.username}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className='mb-2'>
					<label>
						Password:
						<input
							type='password'
							name='password'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={loginData.password}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
					type='submit'
				>
					Login
				</button>
			</form>
		</div>
	)
}

export default LoginForm
