import { useState, useEffect } from 'react'
import moment, { Moment } from 'moment'

const DateTimeDisplay = () => {
	const [currentTime, setCurrentTime] = useState<Moment>(moment())

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(moment())
		}, 100)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div>
			<p>{currentTime.format('Do MMMM YYYY, h:mm a')}</p>
		</div>
	)
}

export { DateTimeDisplay }
