import { DarkModeButton } from '../ButtonToogle/DarkModeButton'
import { useTheme } from '../../hooks/useTheme'
import { LocationSearch } from '../LocationSearch/LocationSearch'
import { MdOutlineLocationOn } from 'react-icons/md'
import { useWeather } from '../../hooks/useWeather'
import { HamburgerMenu } from '../HamburgerMenu.tsx/HamburgerMenu'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Header = () => {
	const { isDarkMode } = useTheme()
	const { location, error } = useWeather()
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

	const toggleSearch = () => {
		setIsSearchOpen(prevState => !prevState)
	}

	const closeSearch = () => {
		setIsSearchOpen(false)
	}

	return (
		<header
			className={`rounded-xl col-start-1 col-end-6 row-start-1 row-end-2 mb-5 mt-5 ${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
			}`}>
			<div className='flex items-center justify-between p-2 h-20'>
				<div className='lg:hidden'>
					<HamburgerMenu />
				</div>
				<div className='flex items-center flex-grow ml-5'>
					<MdOutlineLocationOn />
					{!error && <p className='m-2'>{location}</p>}
				</div>
				<div className='hidden lg:flex flex-grow mr-26'>
					<LocationSearch theme={isDarkMode ? 'dark' : 'light'} isMobileSearchOpen={false} onSearchClose={closeSearch} />
				</div>
				<div className='flex items-center'>
					<div className='hidden lg:block mx-12'>
						<DarkModeButton />
					</div>
					<div className='lg:hidden mr-3'>
						<button onClick={toggleSearch}>
							<FaSearch size={'1.5em'} />
						</button>
					</div>
				</div>
			</div>
			{isSearchOpen && (
				<div className='absolute top-0 left-0 right-0 p-4 h-1/6 bg-gray-800 flex justify-center items-center lg:hidden'>
					<button className='absolute top-6 right-4 text-white' onClick={toggleSearch}>
						<RxCross2 size={'2em'} />
					</button>
					<div className='flex justify-center items-center'>
						<LocationSearch theme={isDarkMode ? 'dark' : 'light'} isMobileSearchOpen={true} onSearchClose={closeSearch} />
					</div>
				</div>
			)}
		</header>
	)
}

export {Header}
