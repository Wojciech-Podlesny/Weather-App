import {useEffect, useState} from "react";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";
import { DateTimeDisplay } from "../DateAndTime/DateTimeDisplay";
import { WeatherIcon } from "../../utils/WeatherIcon";
import { Temperature } from "../Temperature/Temperature";
import { ButtonToogleUnit } from "../ButtonToogleUnit/ButtonToogleUnit";
import { ToastContainer, toast } from "react-toastify";
import { WeatherChart } from "../WeatherChart/WeatherChart";
import { useFavourites } from "../../hooks/useFavourites";
import "react-toastify/dist/ReactToastify.css";
import {VscHeart} from "react-icons/vsc";

const CurrentWeather = () => {
  const { weatherData, location, error } = useWeather();
  const { isDarkMode } = useTheme();
  const { addFavoriteCity , removeFavoriteCity, favoriteCities } = useFavourites();
  const [isFavourite, setFavourite] = useState(false);


  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  useEffect(() => {
    if(location.name && location.country) {
      const cityId = location.name + location.country
      setFavourite(favoriteCities.some((city) => city.id === cityId));
    }
  }, [favoriteCities,location]);

  const handleAddFavorite = () => {
    if (location.name && location.country) {
      const city = {
        id: location.name + location.country,
        name: location.name,
        country: location.country,
      };

      if(isFavourite) {
        removeFavoriteCity(city.id)
        toast.info(`${location.name} Delete with favourite !`);
    } else {
        addFavoriteCity(city)
        toast.info(`${location.name} Add to favourite !`);
      }
    }
    setFavourite(!isFavourite)
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } rounded-xl col-start-1 col-end-6 row-start-2 row-end-3 lg:col-end-4`}
    >
      <div className="flex justify-between mt-4">
        <p className="text-xl font-semibold px-4">Current Weather</p>
        <div className="flex justify-around items-center mr-8">
          <button onClick={handleAddFavorite} aria-label="Add to favorites">
            <VscHeart
                className={`w-8 h-8 transition-all ${isFavourite ? 'fill-red-500' : 'fill-black'}`}
            />
          </button>
          <div className="hidden lg:block">
            <ButtonToogleUnit/>
          </div>
        </div>
      </div>

      {!error && weatherData && (
          <div className="flex flex-col justify-between lg:flex-row flex-grow px-4">
            <div className="flex flex-col sm:items-start md:items-start lg:items-start">
              <WeatherIcon conditionCode={weatherData.code}/>
              <Temperature/>
              <p data-testid="location" className="lg:text-left">
              {location.name} , {location.country}
            </p>
            <DateTimeDisplay />
          </div>
          <div className="mt-4 mx-8 my-4">
            <WeatherChart />
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export { CurrentWeather };
