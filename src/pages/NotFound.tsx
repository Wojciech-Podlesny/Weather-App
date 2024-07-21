import { DarkModeButton } from '../components/ButtonToogle/DarkModeButton'
import { Footer } from '../components/Footer/Footer'
import { useTheme } from '../hooks/useTheme'

const NotFound = () => {
	const { isDarkMode } = useTheme()

	return (
		<div>
			<div
				className={`${
					isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
				} min-h-screen relative flex flex-col m-5 rounded-xl`}>
				<div className='absolute top-0 right-8 p-5 lg:block hidden'>
					<DarkModeButton />
				</div>
				<div className='flex-grow flex flex-col justify-center items-center'>
					<h2 className='text-4xl font-semibold mb-6'>404 - Page Not Found</h2>
					<p className='text-2xl font-semibold mb-6'>The page you are looking for does not exist.</p>
					<a href='/' className='text-blue-500 text-2xl'>
						Go back to home page
					</a>
				</div>
			</div>
			<div className='mx-5'>
				<Footer />
			</div>
		</div>
	)
}

export default NotFound
