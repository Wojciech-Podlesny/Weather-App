import { render, screen } from "@testing-library/react";
import { CurrentWeather } from "./CurrentWeather";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";
import { UnitProvider } from "../../context/UnitContext";

type ThemeContextType = {
  isDarkMode: boolean;
};

type WeatherCurrentType = {
  weatherData: null;
  location: null;
  error: null;
} | null;

jest.mock("../../hooks/useTheme", () => ({
  useTheme: jest.fn(),
}));

jest.mock("../../hooks/useWeather", () => ({
  useWeather: jest.fn(),
}));

const mockedUseTheme = useTheme as unknown as jest.MockedFunction<
  () => ThemeContextType
>;
const mockedUseWeather = useWeather as unknown as jest.MockedFunction<
  () => WeatherCurrentType
>;

describe("CurrentWeather Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });
    mockedUseWeather.mockReturnValue({
      weatherData: null,
      location: null,
      error: null,
    });
    render(
      <UnitProvider>
        <CurrentWeather />
      </UnitProvider>
    );
    expect(screen.getByText(/Current Weather/i)).toBeInTheDocument();
  });
});
