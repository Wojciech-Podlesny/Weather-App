import { DarkModeButton } from '../components/ButtonToogle/DarkModeButton'
import { useTheme } from '../hooks/useTheme'
import { Footer } from '../components/Footer/Footer'

const Maps = () => {
	const { isDarkMode } = useTheme()
	return (
		<div>
			<div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} min-h-screen relative rounded-xl`}>
				<div className='absolute top-5 right-8 p-5 lg:block hidden'>
					<DarkModeButton />
				</div>
				<div className='h-screen rounded-xl m-5'>{/* Adding a map */}</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default Maps
