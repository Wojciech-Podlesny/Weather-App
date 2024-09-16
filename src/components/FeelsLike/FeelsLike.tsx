import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuThermometerSun } from "react-icons/lu";
import { convertTemperature } from '../../utils/ConvertTemperature';
import { useUnit } from '../../hooks/useUnit';

const FeelsLike = () => {
    const { isDarkMode } = useTheme();
    const { weatherData } = useWeather();
    const {celcius} = useUnit()

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-3 col-end-6 row-start-4 row-end-5 lg:col-start-1 lg:col-end-2 p-4`}>
            <div className='flex items-center'>
                <LuThermometerSun className='flex-shrink-0' size={24} />
                <h1 className='text-lg pl-2 font-semibold'>Feels like</h1>
            </div>
            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p>{convertTemperature(weatherData.feelsLike,celcius)}  {celcius ? '°C' : '°F'}</p>
                    <p>{weatherData.feelsLike} °</p>
            
                </div>
            )}
        </div>
    );
};

export { FeelsLike };
