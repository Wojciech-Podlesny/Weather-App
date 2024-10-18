import moment from "moment";
import { useTheme } from "../../hooks/useTheme";
import { Year } from "../../types/Year";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear: Year = moment().year();

  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } col-start-1 col-end-6 row-start-10 row-end-11 lg:row-start-7 lg:row-end-8 rounded-xl h-20 mb-5 flex items-center justify-between px-5`}
    >
      <h1
        data-testid="footer-info"
        className="text-center w-full md:w-auto md:mx-auto font-bold text-lg"
      >
        {" "}
        &copy; {currentYear} Wojciech Podleśny
      </h1>
      <div className="flex items-center">
        <a
          data-testid="linkedin-link"
          href="https://www.linkedin.com/in/wojciech-podlesny"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="cursor-pointer transition-transform transform hover:scale-110 focus:scale-110 hover:text-blue-800"
        >
          <FaLinkedin size={"1.5em"} className="m-2"   data-testid="linkedins-link" />
        </a>
        <a
          data-testid="github-link"
          href="https://github.com/wojciech-podlesny"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="cursor-pointer transition-transform transform hover:scale-110 focus:scale-110 hover:text-blue-800"
        >
          <FaGithub size={"1.5em"} className="m-2"  data-testid="githubs-link" />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
