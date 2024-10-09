import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuCloudDrizzle } from "react-icons/lu";

const AirQuality2 = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-xl col-start-3 col-end-6 row-start-5 row-end-6 lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-4 p-4 `}>
            <div className='flex items-center'>
                <LuCloudDrizzle className='flex-shrink-0' size={24} />
                <h1 className='text-lg pl-2 font-semibold'>Air Quality2</h1>
            </div>
            {weatherData && (
                <div className='font-bold ml-6 mt-2'>
                    <p>{weatherData.airQuality.pm2_5.toFixed(0)}</p>
                </div>
            )}
        </div>
    );
};

export { AirQuality2 };
