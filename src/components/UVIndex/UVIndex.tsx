import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { LuSun } from 'react-icons/lu';
import {UVIndexProgress} from './UVIndexProgress'; 

const UVIndex = () => {
    const { weatherData } = useWeather();
    const { isDarkMode } = useTheme();

    return (
        <div className={`bg-${isDarkMode ? 'gray-800 text-white' : 'white text-black'} rounded-xl col-start-1 col-end-3 row-start-6 row-end-7 lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-6 p-4 my-4`}>
            <div className='flex items-center px-4 py-3'>
                <LuSun className='ml-2' size={24} />
                <h1 className='text-xl pl-2 font-semibold'>UV Index</h1>
            </div>
            {weatherData && (
                <div className='font-bold flex flex-col items-center mt-2'>
                    <div className='m-4'>
                        <UVIndexProgress value={weatherData.uvIndex} maxValue={100} />
                    </div>
                    <h1 className='text-2xl'>{weatherData.uvIndex} uv</h1>
                </div>
            )}
        </div>
    );
}

export  {UVIndex};
