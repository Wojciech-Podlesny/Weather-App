import { useTheme } from '../hooks/useTheme'

const Maps = () => {
	const { isDarkMode } = useTheme()
	return (
		<div
			className={`${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			} w-screen h-screen flex justify-center items-start`}>
			<h1>Maps</h1>
		</div>
	)
}

export default Maps
