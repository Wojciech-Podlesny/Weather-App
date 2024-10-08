import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { RxDashboard } from "react-icons/rx";
import { TbHeart } from "react-icons/tb";
import { LiaMap } from "react-icons/lia";
import { SlSettings } from "react-icons/sl";
import Sun from "../../assets/icon.png";

const Sidebar = () => {
  const { isDarkMode } = useTheme();
  return (
    <nav
      data-testid="sidebar"
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } rounded-xl  mr-2 p-10 w-60 hidden lg:block mx-5 my-10`}
    >
      <div className="flex justify-center items-center mb-6">
        <img className="w-20 h-20" src={Sun} alt="Sun" />
      </div>
      <ul className="py-4">
        <li data-testid="dashboard-link" className="mb-4">
          <Link
            to="/"
            className="hover:font-bold flex items-center transition-all duration-300"
          >
            <RxDashboard className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li data-testid="maps-link" className="mb-4">
          <Link
            to="/maps"
            className="hover:font-bold flex items-center transition-all duration-300"
          >
            <LiaMap className="mr-2" />
            Maps
          </Link>
        </li>
        <li data-testid="saved-location-link" className="mb-4">
          <Link
            to="/savedLocation"
            className="hover:font-bold flex items-center transition-all duration-300"
          >
            <TbHeart className="mr-2" />
            SavedLocation
          </Link>
        </li>

        <li data-testid="settings-link" className="mb-4">
          <Link
            to="/settings"
            className="hover:font-bold flex items-center transition-all duration-300"
          >
            <SlSettings className="mr-2" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Sidebar };
