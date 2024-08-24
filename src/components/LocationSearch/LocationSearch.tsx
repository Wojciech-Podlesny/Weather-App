import { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { FaSearch } from 'react-icons/fa';
import { LuLocateFixed } from 'react-icons/lu';
import { LocationSearchProps } from '../../types/LocationSearch';
import { ToastContainer } from 'react-toastify';
import { ErrorToast } from '../ErrorToast/ErrorToast';
import { Location } from '../Location/Location';

const LocationSearch = ({ isMobileSearchOpen, onSearchClose, theme }: LocationSearchProps) => {
  const { setLocation } = useWeather();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchGeolocation = () => {
    setIsFetching(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);
          setIsFetching(false);
          onSearchClose();
        },
        (error) => {
          console.error('Error fetching geolocation:', error);
          setIsFetching(false);
          showErrorToast('Error fetching geolocation');
        }
      );
    } else {
      setIsFetching(false);
      showErrorToast('Geolocation is not supported by this browser.');
    }
  };

  const showErrorToast = (message: string) => {
    ErrorToast({ message });
  };

  const iconColor = theme === 'dark' ? 'black' : 'black';

  return (
    <div
      className={`relative items-center rounded-md px-3 py-2 ${isMobileSearchOpen ? 'block' : 'hidden'} lg:block w-full max-w-md`}
    >
      <ToastContainer />
      <button onClick={onSearchClose} className='absolute left-8 top-1/2 transform -translate-y-1/2'>
        <FaSearch color={iconColor} />
      </button>
      <div className='flex flex-col'>
        <Location /> 
      </div>
      <button
        onClick={fetchGeolocation}
        disabled={isFetching}
        className='absolute right-6 top-1/2 transform -translate-y-1/2'
      >
        <LuLocateFixed size={'1.5em'} color={iconColor} />
      </button>
    </div>
  );
};

export { LocationSearch };
