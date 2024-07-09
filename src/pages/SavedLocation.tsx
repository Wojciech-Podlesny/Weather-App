import { useTheme } from '../hooks/useTheme'

const SavedLocation = () => {
	const { isDarkMode } = useTheme()
	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} w-screen h-screen flex justify-center items-start`}>
			<h1>Saved Location</h1>
		</div>
	)
}

export default SavedLocation
