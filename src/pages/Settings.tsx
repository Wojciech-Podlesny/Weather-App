import { DarkModeButton } from '../components/ButtonToogle/DarkModeButton'
import { Footer } from '../components/Footer/Footer'
import { HamburgerMenu } from '../components/HamburgerMenu.tsx/HamburgerMenu'
import { SettingsMobile } from '../components/SettingsMobile.tsx/SettingsMobile'
import { useTheme } from '../hooks/useTheme'

const Settings = () => {
	const { isDarkMode } = useTheme()
	return (
		<div>
			<div
				className={`${
					isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
				} min-h-screen relative rounded-xl m-5`}>
				<HamburgerMenu />
				<div className=' flex justify-center items-center md:hidden'>
					<SettingsMobile />
				</div>
				<div className='absolute top-2 right-8 p-5 lg:block hidden'>
					<DarkModeButton />
				</div>
				<div className='hidden md:block'>{/* <h1>.....</h1>  przedyskutować co tutaj ma być  */}
				</div>
			</div>
			<div className='mx-5'>
				<Footer />
			</div>
		</div>
	)
}

export default Settings
