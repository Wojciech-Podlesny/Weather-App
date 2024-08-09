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
				} min-h-screen flex flex-col relative rounded-xl m-5`}>
				<HamburgerMenu />
				<div className='mt-4 px-4 flex-grow'>
					<h1 className='text-2xl text-center py-9 lg:pt-28'>Settings</h1>
					<div className='flex flex-col items-center gap-4'>
						<div className='flex items-center gap-5'>
							<h2 className='text-lg'>Dark Mode</h2>
							<DarkModeButton />
						</div>
						<div className='flex items-center gap-5 lg:pl-5'>
							<h2 className='text-lg'>Unit Toggle</h2>
							<ButtonToogleUnit />
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-end items-center py-4'>
					<h2>Weather App use api weatherapi.com</h2>
					<h3>Weather App create by Wojciech Podleśny</h3>
				</div>
			</div>
			<div className='mx-5'>
				<Footer />
			</div>
		</div>
	)
}

export default Settings
