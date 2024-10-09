import { createContext } from "react";
import { Props } from "../types/WeatherData";
import { City, FavoriteCitiesContextType } from "../types/FavoriteCities";
import {useLocalStorage} from "../hooks/useLocalStorage";

 export const FavoriteCitiesContext = createContext<FavoriteCitiesContextType | null>(null); //pusta tablica// favorites citys pusta tablica/ ze nei było nulla a puista tablica

export const FavoriteCitiesProvider = ({ children }: Props) => {
  // const [favoriteCities, setFavoriteCities] = useState<City[]>([]);
  const [favoriteCities, setFavoriteCities] = useLocalStorage('favoriteCities',[]);

  const addFavoriteCity = (city: City) => {
    setFavoriteCities((prevCities: City[]) => [...prevCities, city]);
  };

  const removeFavoriteCity = (cityId: string) => {
    setFavoriteCities((prevCities: City[]) =>
      prevCities.filter((city) => city.id !== cityId)
    );
  };

  return (
    <FavoriteCitiesContext.Provider
      value={{ favoriteCities, addFavoriteCity, removeFavoriteCity }}
    >
      {children}
    </FavoriteCitiesContext.Provider>
  );
};
