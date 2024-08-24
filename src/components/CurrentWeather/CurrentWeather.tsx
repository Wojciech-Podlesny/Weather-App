import { useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useWeather } from '../../hooks/useWeather';
import { DateTimeDisplay } from '../DateAndTime/DateTimeDisplay';
import { WeatherIcon } from '../../utils/WeatherIcon';
import { Temperature } from '../Temperature/Temperature';
import { ButtonToogleUnit } from '../ButtonToogleUnit/ButtonToogleUnit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherChart } from '../WeatherChart/WeatherChart';

const CurrentWeather = () => {
    const { weatherData, location, error } = useWeather(); 
    const { isDarkMode } = useTheme();

    useEffect(() => {
        if (error) {
            toast.error(`Error: ${error}`);
        }
    }, [error]);

    

    return (
        <div
            className={`${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            } rounded-xl col-start-1 col-end-6 row-start-2 row-end-3 lg:col-end-4`}
        >
            <div className='flex justify-between mt-4'>
                <p className='text-xl font-semibold px-4'>Current Weather</p>
                <div className='hidden lg:block px-8'>
                    <ButtonToogleUnit />
                </div>
            </div>

            {!error && weatherData && (
                <div className='flex flex-col justify-between lg:flex-row flex-grow px-4'>
                    <div className='flex flex-col sm:items-start md:items-start lg:items-start'>
                        <WeatherIcon conditionCode={weatherData.code} />
                        <Temperature />
                        <p className='lg:text-left'>{location} , {weatherData.country} </p>
                        <DateTimeDisplay />
                    </div>
                    <div className='mt-4 mx-8 my-4'>
                        <WeatherChart />
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export { CurrentWeather };
