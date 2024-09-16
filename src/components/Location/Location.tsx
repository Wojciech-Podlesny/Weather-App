import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useWeather } from "../../hooks/useWeather";
import { ErrorToast } from "../ErrorToast/ErrorToast";

type City = {
  id: string;
  name: string;
  country: string;
};

const Location = () => {
  const { location, setLocation } = useWeather();
  const [inputValue, setInputValue] = useState<string>("");
  const [listCity, setListCity] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCitySelected, setIsCitySelected] = useState<boolean>(false);

  useEffect(() => {
    setInputValue(location.name);
  }, [location]);

  const fetchCities = async (inputVal: string) => {
    if (inputVal.length < 3) {
      setListCity([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${inputVal}`
      );
      const data = await response.json();
      setListCity(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setIsLoading(false);
      setIsCitySelected(true);
    }
  };

  useEffect(() => {
    if (!isCitySelected) {
      const timeoutId = setTimeout(() => {
        fetchCities(inputValue);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [inputValue, isCitySelected]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCitySelected(false);
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        setLocation({name: inputValue, country: inputValue});
        setListCity([]);
      } else {
        showErrorToast("Location cannot be empty");
      }
    }
  };

  const showErrorToast = (message: string) => {
    ErrorToast({ message });
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter city name"
        className="placeholder-gray-500 pr-10 pl-16 w-full py-2 text-base rounded-2xl border-2 border-black text-black"
      />
      {isLoading && <div className="absolute bg-white p-2">Loading...</div>}
      {listCity.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded mt-1 w-full">
          {listCity.map((city) => (
            <li
              key={city.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setLocation({ name: city.name, country: city.country });
                setListCity([]);
              }}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Location };
