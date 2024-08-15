import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuEye } from 'react-icons/lu';

const Visibility = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-1 col-end-3 lg:col-start-3 lg:col-end-4 row-start-4 row-end-5 lg:row-start-3 lg:row-end-4 p-4 `}>
            <div className='flex items-center'>
                <LuEye className='flex-shrink-0' size={24} />
                <h1 className='text-lg pl-2 font-semibold'>Visibility</h1>
            </div>
            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p>{weatherData.visibility} km</p>
                </div>
            )}
        </div>
    );
};

export { Visibility };
