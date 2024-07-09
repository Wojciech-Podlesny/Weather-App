import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useWeather } from '../../hooks/useWeather'
import { FaSearch } from 'react-icons/fa'
import { LuLocateFixed } from 'react-icons/lu'
import { LocationSearchProps } from '../../types/LocationSearch'

const LocationSearch = ({ isMobileSearchOpen, onSearchClose, theme }: LocationSearchProps) => {
	const [city, setCity] = useState<string>('')
	const { setLocation } = useWeather()
	const [error, setError] = useState<string>('')
	const [isFetching, setIsFetching] = useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCity(e.target.value)
		if (error) {
			setError('')
		}
	}

	const handleSearch = () => {
		if (city.trim() === '') {
			setError('Location cannot be empty')
			return
		}

		setLocation(city)
		onSearchClose()
	}

	const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			handleSearch()
		}
	}

	const fetchGeolocation = () => {
		setIsFetching(true)
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const { latitude, longitude } = position.coords
					setLocation(`${latitude},${longitude}`)
					setIsFetching(false)
					onSearchClose()
				},
				error => {
					console.error('Error fetching geolocation:', error)
					setIsFetching(false)
				}
			)
		} else {
			console.error('Geolocation is not supported by this browser.')
			setIsFetching(false)
		}
	}

	const iconColor = theme === 'dark' ? 'black' : 'black';

	return (
		<div
			className={`relative items-center rounded-md px-3 py-2 ${
				isMobileSearchOpen ? 'block' : 'hidden'
			}  lg:block w-full max-w-md`}
		>
			<button onClick={handleSearch} className='absolute left-8 top-1/2 transform -translate-y-1/2'>
				<FaSearch color={iconColor} />
			</button>
			<div className='flex flex-col'>
				<input
					type='text'
					value={city}
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}
					placeholder='Search location'
					className='placeholder-gray-500 pr-10 pl-16 w-full py-2 text-base rounded-2xl border-2 border-black'
				/>
				{error && <p className='text-red-500 mt-1'>{error}</p>}
			</div>

			<button
				onClick={fetchGeolocation}
				disabled={isFetching}
				className='absolute right-6 top-1/2 transform -translate-y-1/2'
			>
				<LuLocateFixed size={'1.5em'} color={iconColor} />
			</button>
		</div>
	)
}

export { LocationSearch }