import { DarkModeButton } from "../components/ButtonToogle/DarkModeButton";
import { useTheme } from "../hooks/useTheme";
import { Footer } from "../components/Footer/Footer";
import { HamburgerMenu } from "../components/HamburgerMenu.tsx/HamburgerMenu";
import { useFavourites } from "../hooks/useFavourites";


const SavedLocation = () => {
    const { isDarkMode } = useTheme();
    const { favoriteCities, removeFavoriteCity } = useFavourites();


    return (

        <div>
            <div className={`min-h-screen rounded-xl ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                <HamburgerMenu/>
                <div className="absolute top-12 right-16 p-5 lg:block hidden">
                    <DarkModeButton/>
                </div>
                <div className="h-screen rounded-xl m-5 p-5">
                    <h1 className="text-2xl font-bold mb-4">My Favourite Locations</h1>
                    {favoriteCities.length === 0 ? (
                        <p className="text-gray-500 text-2xl">No favourite locations</p>
                    ) : (
                        <ul className={`{${isDarkMode ? 'bg-gray-800 text-black' : 'bg-white text-black' } mt-6 space-y-4 pt-4`}>
                            {favoriteCities.map((city) => (
                                <li key={city.id}
                                    className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200">
                <span className="font-medium">
                  {city.name}, {city.country}
                </span>
                                    <button
                                        onClick={() => removeFavoriteCity(city.id)}
                                        className="text-red-500 hover:text-red-700 transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default SavedLocation;
