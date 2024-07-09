import { useTheme } from '../hooks/useTheme';

const NotFound = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } min-h-screen flex flex-col items-center justify-center rounded-xl`}
    >
      <div className="max-w-lg text-center p-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500">
          Go back to home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
