import { render, screen } from "@testing-library/react";
import { HourlyForecast } from "./HourlyForecast";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";
import { UnitProvider } from "../../context/UnitContext";

type ThemeContextType = {
  isDarkMode: boolean;
};

type WeatherDataType = {
  forecast: {
    forecastday: {
      day: any;
      hour: Array<{
        time: string;
        condition: {
          code: number;
          text: string;
        };
        temp_c: number;
        wind_kph: number;
        humidity: number;
      }>;
    }[];
  };
};

type WeatherContextType = {
  weatherData: WeatherDataType | null;
  location: {
    name: string;
    country: string;
  } | null;
  error: string | null;
};

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
  () => WeatherContextType
>;

describe("HourlyForecast Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });
    mockedUseWeather.mockReturnValue({
      weatherData: null,
      location: null,
      error: null,
    });

    render(
      <UnitProvider>
        <HourlyForecast />
      </UnitProvider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
