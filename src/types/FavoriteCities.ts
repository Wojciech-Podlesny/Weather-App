export type City = {
  id: string;
  name: string;
  country: string;
};

export type FavoriteCitiesContextType = {
  favoriteCities: City[];
  addFavoriteCity: (city: City) => void;
  removeFavoriteCity: (cityId: string) => void;
};
