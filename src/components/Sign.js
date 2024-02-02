import React from 'react'
import { NavLink } from 'react-router-dom'

const Sign = () => {
	return (
		<div className='flex items-center justify-center mt-10 gap-10'>
			<NavLink to={'/registration'}>
				<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
					Sign Up
				</button>
			</NavLink>
			<NavLink to={'/login'}>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Sign In
				</button>{' '}
			</NavLink>
		</div>
	)
}

export default Sign
