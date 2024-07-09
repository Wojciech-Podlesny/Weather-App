import { weatherIcons } from './weatherIcons'
import { WeatherIconProps } from '../types/WeatherIcons'

const WeatherIcon = ({ conditionCode }: WeatherIconProps) => {
	const icon = conditionCode ? weatherIcons[conditionCode] : null

	return <div>{icon ? <img src={icon} alt='Weather Icon' /> : <p> ;-</p>}</div>
}

export { WeatherIcon }