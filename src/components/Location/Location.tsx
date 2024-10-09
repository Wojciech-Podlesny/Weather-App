import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { useWeather } from "../../hooks/useWeather";
import { ErrorToast } from "../ErrorToast/ErrorToast";
import {useTheme} from "../../hooks/useTheme";

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
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const {isDarkMode} = useTheme()

  useEffect(() => {
    if (isCitySelected) {
      setInputValue(`${location.name}`);
    }
  }, [isCitySelected, location]);

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
      setIsCitySelected(false);
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
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex < listCity.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          const selectedCity = listCity[selectedIndex];
          setLocation({
            name: selectedCity.name,
            country: selectedCity.country,
          });
          setInputValue(`${selectedCity.name}, ${selectedCity.country}`);
          setListCity([]);
          setIsCitySelected(true);
        } else if (inputValue.trim() !== "") {
          setLocation({ name: inputValue, country: inputValue });
          setListCity([]);
          setIsCitySelected(true);
        } else {
          showErrorToast("Location cannot be empty");
        }
        break;
    }
  };

  const showErrorToast = (message: string) => {
    ErrorToast({ message });
  };

  return (
    <div className="relative">
      <input
        data-testid="input-element"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
        className="placeholder-gray-500 pr-10 pl-16 w-full py-2 text-base rounded-2xl border-2 border-black text-black"
      />
      {isLoading && <div className="absolute bg-white p-2">Loading...</div>}
      {listCity.length > 0 && (
        <ul className={`${isDarkMode ? 'bg-gray-800 text-black' : 'text-black'} absolute bg-white border border-gray-300 rounded mt-1 w-full`}>
          {listCity.map((city, index) => (
            <li
              key={city.id}
              className={`p-2 cursor-pointer ${
                index === selectedIndex ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setLocation({ name: city.name, country: city.country });
                setInputValue(`${city.name}, ${city.country}`);
                setListCity([]);
                setIsCitySelected(true);
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
