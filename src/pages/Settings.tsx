import { Footer } from '../components/Footer/Footer'
import { SettingsMobile } from '../components/SettingsMobile.tsx/SettingsMobile'
import { useTheme } from '../hooks/useTheme'

const Settings = () => {
	const { isDarkMode } = useTheme()
	return (
		<div>
			<div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} h-screen rounded-xl m-5`}>
				<div className=' flex justify-center items-center'>
					<SettingsMobile />
				</div>
			</div>
			<div className='mx-5'>
				<Footer />
			</div>
		</div>
	)
}

export default Settings
