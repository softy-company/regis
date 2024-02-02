import { Route, Routes } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/Login'
import Sign from './components/Sign'
import Profil from './components/profil'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/registration' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/cureful' element={<Profil/>} />
			</Routes>
			<Sign />

			{/* <RegistrationForm/> */}
		</div>
	)
}

export default App
