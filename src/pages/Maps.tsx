import { DarkModeButton } from "../components/ButtonToogle/DarkModeButton";
import { useTheme } from "../hooks/useTheme";
import { Footer } from "../components/Footer/Footer";
import { HamburgerMenu } from "../components/HamburgerMenu.tsx/HamburgerMenu";
import WeatherMap from "../components/WeatherMap/WeatherMap";


const Maps = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } min-h-screen relative rounded-xl`}
      >
        <HamburgerMenu />
        <div className="absolute top-2 right-8 p-5 lg:block hidden">
          <DarkModeButton />
        </div>
        <div className="w-full h-full"></div>
         <WeatherMap />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Maps;

