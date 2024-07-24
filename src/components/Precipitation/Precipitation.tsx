import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuCloudDrizzle } from 'react-icons/lu';

const Precipitation = () => {
    const { isDarkMode } = useTheme();
    const { weatherData } = useWeather();

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-3 col-end-6 row-start-4 row-end-5 lg:col-start-1 lg:col-end-2 p-4`}>
            <div className='flex items-center px-4 py-3'>
                <LuCloudDrizzle className='mr-3' size={24} />
                <h1 className='text-xl pl-2 font-semibold'>Precipitation</h1>
            </div>
            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p>{weatherData.precipitation} mm</p>
                </div>
            )}
        </div>
    );
};

export { Precipitation };
