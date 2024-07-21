import { useState } from 'react'
import { useWeather } from '../../hooks/useWeather'
import { useUnit } from '../../hooks/useUnit'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { RxDashboard } from 'react-icons/rx'
import { TbHeart } from 'react-icons/tb'
import { LiaMap } from 'react-icons/lia'
import { SlSettings } from 'react-icons/sl'
import { FiMenu, FiX } from 'react-icons/fi'
import sun from '../../assets/2682849_cloud_cloudy_day_forecast_sun_icon.svg'
import { convertTemperature } from '../../utils/ConvertTemperature'

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { isDarkMode } = useTheme()
	const { weatherData } = useWeather()
	const { celcius } = useUnit()

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<div>
			<button onClick={toggleMenu} className='lg:hidden p-4'>
				{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
			</button>
			<div
				className={`${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} fixed top-0 left-0 w-3/4 h-full transition-transform transform ${
					isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
				} z-50`}>
				<div className='flex justify-between items-center p-5'>
					<div>
						<img className='w-12 h-12' src={sun} alt='Sun' />
					</div>
					<button onClick={closeMenu}>
						<FiX size={26} />
					</button>
				</div>

				<div className={` border-b-2 border-b-slate-800 py-4 ${isDarkMode ? 'border-b-white' : 'border-slate-800'}`}>
					{weatherData && (
						<div className='mx-4'>
							<p className='text-xl'>
								{convertTemperature(weatherData.temperature, celcius).toFixed(1)} {celcius ? '°C' : '°F'}
							</p>
							<p className='text-xl'>{weatherData.cityName}</p>
						</div>
					)}
				</div>

				<nav className='p-4'>
					<ul>
						<li className='mb-4'>
							<Link
								to='/'
								className='hover:font-bold flex items-center transition-all duration-300 rounded-xl '
								onClick={closeMenu}>
								<RxDashboard className='mr-2 hover:font-bold' />
								Dashboard
							</Link>
						</li>
						<li className='mb-4'>
							<Link
								to='/maps'
								className='hover:font-bold flex items-center transition-all duration-300 rounded-xl'
								onClick={closeMenu}>
								<LiaMap className='mr-2 hover:font-bold' />
								Maps
							</Link>
						</li>
						<li className='mb-4'>
							<Link
								to='/savedLocation'
								className='hover:font-bold flex items-center transition-all duration-300  rounded-xl'
								onClick={closeMenu}>
								<TbHeart className='mr-2' />
								SavedLocation
							</Link>
						</li>
						<li className='mb-4'>
							<Link
								to='/settings'
								className='hover:font-bold flex items-center transition-all duration-300 rounded-xl'
								onClick={closeMenu}>
								<SlSettings className='mr-2 hover:font-bold' />
								Settings
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export { HamburgerMenu }