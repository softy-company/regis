import React, { useState } from 'react'
import axios from 'axios'
import LoginForm from './Login'
// import LoginForm from './LoginForm'; // Подставьте путь к вашему компоненту LoginForm

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		age: '',
		password: ''
	})
	const [registrationSuccess, setRegistrationSuccess] = useState(false)

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(
				'http://localhost:5000/register',
				formData
			)
			console.log(response.data)
			setRegistrationSuccess(true)
		} catch (error) {
			console.error('Error registering user:', error)
		}
	}

	return (
		<div className='flex items-center justify-center mt-10 flex-col gap-3 '>
			{registrationSuccess ? (
				<LoginForm />
			) : (
				<form onSubmit={handleSubmit}>
					<div className='mb-2'>
						<label>
							Username:
							<input
								type='text'
								name='username'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								value={formData.username}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className='mb-2'>
						<label>
							Email:
							<input
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className='mb-2'>
						<label>
							Age:
							<input
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								type='number'
								name='age'
								value={formData.age}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className='mb-2'>
						<label>
							Password:
							<input
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
							/>
						</label>
					</div>
					<button
						className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
						type='submit'
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}

export default RegistrationForm
