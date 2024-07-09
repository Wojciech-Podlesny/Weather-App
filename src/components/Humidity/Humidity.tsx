import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuDroplets } from "react-icons/lu";

const Humidity = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div className={`bg-${isDarkMode ? 'gray-800 text-white' : 'white text-black'} rounded-xl col-start-1 col-end-3 row-start-3 row-end-4 lg:col-end-2 p-4 my-4`}>
            <div className='flex items-center px-4 py-3'>
                <LuDroplets className='ml-2' size={24} />
                <h1 className='text-xl pl-2 font-semibold'>Humidity</h1>
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
