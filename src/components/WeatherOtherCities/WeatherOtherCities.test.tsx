import { render, screen } from "@testing-library/react";
import { WeatherOtherCities } from "./WeatherOtherCities";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";
import { UnitProvider } from "../../context/UnitContext";

type ThemeContextType = {
  isDarkMode: boolean;
};

type WeatherCities = {
  weatherData: {
    location: {
      name: string;
    };
    current: {
      temp_c: number;
      condition: {
        icon: string;
      };
    };
  } | null;
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
  () => WeatherCities
>;

describe("WeatherOtherCities Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });
    mockedUseWeather.mockReturnValue({
      weatherData: null,
    });

    render(
      <UnitProvider>
        <WeatherOtherCities />
      </UnitProvider>
    );
    expect(screen.getByText(/Weather Other Cities/i)).toBeInTheDocument();
  });
});
