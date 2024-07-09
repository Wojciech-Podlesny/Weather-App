import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { RxDashboard } from 'react-icons/rx'
import { TbHeart } from 'react-icons/tb'
import { LiaMap } from 'react-icons/lia'
import { SlSettings } from 'react-icons/sl'

const Sidebar = () => {
	const { isDarkMode } = useTheme()
	return (
		<nav
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} rounded-xl  mr-2 p-10 w-60 hidden lg:block mt-5 ml-5 mb-5`}>
			<h1 className='pb-10 font-bold text-center'>WEATHER APP</h1>
			<ul>
				<li className='mb-4'>
					<Link to='/' className='hover:font-bold flex items-center transition-all duration-300'>
						<RxDashboard className='mr-2 hover:font-bold' />
						Dashboard
					</Link>
				</li>
				<li className='mb-4'>
					<Link to='/maps' className='hover:font-bold flex items-center transition-all duration-300'>
						<LiaMap className='mr-2 hover:font-bold' />
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
						<SlSettings className='mr-2 hover:font-bold' />
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export { Sidebar }
