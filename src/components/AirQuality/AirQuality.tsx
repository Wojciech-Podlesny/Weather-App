import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuCloudDrizzle } from 'react-icons/lu';

const AirQuality = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-1 col-end-3 row-start-5 row-end-6 lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3 p-4 `}>
            <div className='flex items-center'>
                <LuCloudDrizzle className='flex-shrink-0' size={24} />
                <h1 className='text-lg pl-2 font-semibold'>Air Quality</h1>
            </div>
            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p data-testid="air-quality-id">{(weatherData.airQuality.pm10.toFixed(0))}</p>
                </div>
            )}
        </div>
    );
};

export { AirQuality };
