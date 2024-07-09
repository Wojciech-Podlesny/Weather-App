import { SettingsMobile } from '../components/SettingsMobile.tsx/SettingsMobile'
import { useTheme } from '../hooks/useTheme'

const Settings = () => {
	const { isDarkMode } = useTheme()
	return (
		<div className={`${isDarkMode ? 'bg-gray-800  text-white' : 'bg-white  text-black'} h-screen w-screen`}>
			<div className=' flex justify-center items-center'>
				<SettingsMobile />
			</div>
		</div>
	)
}

export default Settings
