import { DarkModeButton } from '../components/ButtonToogle/DarkModeButton'
import { ButtonToogleUnit } from '../components/ButtonToogleUnit/ButtonToogleUnit'
import { Footer } from '../components/Footer/Footer'
import { HamburgerMenu } from '../components/HamburgerMenu.tsx/HamburgerMenu'
import { useTheme } from '../hooks/useTheme'

const Settings = () => {
	const { isDarkMode } = useTheme()

	return (
		<div>
			<div
				className={`${
					isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
				} min-h-screen flex flex-col relative rounded-xl lg:mt-5`}>
				<HamburgerMenu />
				<h1 className='text-2xl text-center py-9 lg:pt-28 underline underline-offset-8'>Settings</h1>
				<div className='mt-3 flex-grow'>
					<div className='flex flex-col items-center gap-5'>
						<div className='flex items-center gap-5'>
							<h2 className='text-xl'>Theme:</h2>
							<DarkModeButton />
						</div>
						<div className='flex items-center gap-5 lg:pl-8 pl-3'>
							<h2 className='text-xl'>Units:</h2>
							<ButtonToogleUnit />
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-end items-center py-12 gap-2 px-6'>
					<p className='text-xl md:text-xl text-center'>
						This Weather App uses the{' '}
						<a
							className='underline underline-offset-4 font-bold text-xl'
							href='https://www.weatherapi.com/'
							target='_blank'
							rel='noopener noreferrer'>
							Weather API
						</a>{' '}
						to obtain the latest weather data.
					</p>
					<p className='text-xl md:text-xl text-center'>Weather App created by Wojciech Podleśny</p>
				</div>
			</div>
			<div className='mt-5'>
				<Footer />
			</div>
		</div>
	)
}

export default Settings
