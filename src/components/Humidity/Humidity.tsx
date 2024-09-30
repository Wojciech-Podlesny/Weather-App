import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuDroplets } from "react-icons/lu";

const Humidity = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div data-testid="humidity-id" className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-1 col-end-3 row-start-3 row-end-4 lg:col-end-2 p-4`}>
            <div className='flex items-center'>
                <LuDroplets className='flex-shrink-0' size={24} />
                <h1 className='text-lg pl-2 font-semibold'>Humidity</h1>
            </div>

            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p>{weatherData.humidity} %</p>
                </div>
            )}
        </div>
    );
};

export { Humidity };
