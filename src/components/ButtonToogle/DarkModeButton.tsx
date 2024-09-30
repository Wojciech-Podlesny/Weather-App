import { useTheme } from "../../hooks/useTheme";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="bg-zinc-700 rounded-full border border-zinc-800 p-1  items-center justify-between 2xl:transform 2xl:translate-x-9 lg:block">
      <button
        data-testid="dark"
        onClick={toggleDarkMode}
        className={`${
          isDarkMode
            ? "bg-[#b3dadd] p-2 px-3 rounded-full text-zinc-900  font-bold"
            : "p-1 px-3 text-zinc-200"
        }`}
      >
        <MdOutlineDarkMode />
      </button>
      <button
        data-testid="light"
        onClick={toggleDarkMode}
        className={`${
          isDarkMode
            ? " text-zinc-200 p-1 px-3"
            : "bg-[#b3dadd] px-3 p-2 rounded-full text-zinc-900  font-bold"
        }`}
      >
        <LuSunMedium />
      </button>
    </div>
  );
};

export { DarkModeButton };
