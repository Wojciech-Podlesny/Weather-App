import { AirQuality } from '../components/AirQuality/AirQuality'
import { AirQuality2 } from '../components/AIrQuality2/AirQuality2'
import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather'
import Header from '../components/Header/Header'
import { Humidity } from '../components/Humidity/Humidity'
import { Pressure } from '../components/Pressure/Pressure'
import { UVIndex } from '../components/UVIndex/UVIndex'
import { Visibility } from '../components/Visibility/Visibility'
import { Wind } from '../components/Wind/Wind'
import { Sunrise } from '../components/Sunrise/Sunrise'
import { Precipitation } from '../components/Precipitation/Precipitation'
import HourlyForecast from '../components/ForrecastWeather/ForrecastForecast'
import { Footer } from '../components/Footer/Footer'


const Dashboard = () => {
	return (
		<div>
			<div className='grid grid-cols-4 lg:grid-cols-5 gap-4'>
				<Header />
				<CurrentWeather />
				<HourlyForecast />
				<Humidity />
				<Pressure />
				<Visibility />
				<Wind />
				<AirQuality />
				<AirQuality2 />
				<UVIndex />
				<Precipitation />
				<Sunrise />
				<Footer />
			</div>
		</div>
	)
}

export default Dashboard
