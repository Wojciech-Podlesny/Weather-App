import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { RxDashboard } from 'react-icons/rx'
import { TbHeart } from 'react-icons/tb'
import { LiaMap } from 'react-icons/lia'
import { SlSettings } from 'react-icons/sl'
import Sun from '../../assets/2682849_cloud_cloudy_day_forecast_sun_icon.svg'

const Sidebar = () => {
	const { isDarkMode } = useTheme()
	return (
		<nav
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl  mr-2 p-10 w-60 hidden lg:block mt-5 ml-5 mb-5`}>
			<div className='flex justify-center items-center mb-6'>
				<img className='w-16 h-16' src={Sun} alt="Sun" />
			</div>
			<ul>
				<li className='mb-4'>
					<Link to='/' className='hover:font-bold flex items-center transition-all duration-300'>
						<RxDashboard className='mr-2' />
						Dashboard
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/maps' className='hover:font-bold flex items-center transition-all duration-300'>
						<LiaMap className='mr-2' />
						Maps
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/savedLocation' className='hover:font-bold flex items-center transition-all duration-300'>
						<TbHeart className='mr-2' />
						SavedLocation
					</Link>
				</li>

				<li className='mb-4 lg:hidden'>
					<Link to='/settings' className='hover:font-bold flex items-center transition-all duration-300'>
						<SlSettings className='mr-2' />
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export { Sidebar }
