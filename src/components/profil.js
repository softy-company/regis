import React from 'react'
import { useSelector } from 'react-redux'

const Profil = () => {
	const { user } = useSelector(s => s)
	console.log(user)
	// const { age } = useSelector(s => s)
	// const { email } = useSelector(s => s)
	// console.log(userName)
	return (
		<div className='mt-10'>
			<h1 className='text-center'>{user.username}</h1>
			<h1 className='text-center'>{user.email}</h1>
			<h1 className='text-center'>{user.age}</h1>
		</div>
	)
}

export default Profil
