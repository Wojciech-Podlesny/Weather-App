import { useContext } from "react";
import { FavoriteCitiesContext } from "../context/FavouriteCitiesConext";

export const useFavourites = () => {
  const context = useContext(FavoriteCitiesContext);
  if (!context) {
    throw new Error("useFavourites must be used within a FavoriteCitiesProvider");
  }
  return context;
};
