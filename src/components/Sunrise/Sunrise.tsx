import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { SunriseSunset } from '../ProgressBar/SunriseSunset';
import { LuSun } from 'react-icons/lu';

const Sunrise = () => {
    const { isDarkMode } = useTheme();
    const { weatherData } = useWeather();

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-1 col-end-6 row-start-7 row-end-8 lg:col-start-3 lg:col-end-4 lg:row-start-5 lg:row-end-6 p-4`}>
            <div className='flex items-center px-4 py-3'>
                <LuSun className='ml-2' size={24} />
                <h1 className='text-xl pl-2 font-semibold'>Sunrise & Sunset</h1>
            </div>

            {weatherData && (
                <div className='font-bold ml-4 mt-2'>
                    <SunriseSunset sunrise={weatherData.sunrise} sunset={weatherData.sunset} /> 
                </div>
            )}
        </div>
    );
}

export { Sunrise };
