import { DarkModeButton } from '../components/ButtonToogle/DarkModeButton'
import { useTheme } from '../hooks/useTheme'
import { Footer } from '../components/Footer/Footer'

const SavedLocation = () => {
	const { isDarkMode } = useTheme()
	return (
		<div>
			<div>
				<div
					className={`${
						isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
					} min-h-screen relative rounded-xl`}>
					<div className='absolute top-2 right-8 p-5 lg:block hidden'>
						<DarkModeButton />
					</div>
					<div className='h-screen rounded-xl m-5'>{/* Adding saved locations*/}</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}

export default SavedLocation
