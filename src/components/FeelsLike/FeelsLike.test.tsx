import { render, screen } from "@testing-library/react";
import { FeelsLike } from "./FeelsLike";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";
import { UnitProvider } from "../../context/UnitContext";

type ThemeContextType = {
  isDarkMode: boolean;
};

type WeatherContextType = {
  weatherData: {
    feelsLike: string;
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
  () => WeatherContextType
>;

describe("FeelsLike Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });
    mockedUseWeather.mockReturnValue({ weatherData: null });

    render(
      <UnitProvider>
        <FeelsLike />
      </UnitProvider>
    );
    expect(screen.getByText(/Feels Like/i)).toBeInTheDocument();
    expect(screen.queryByText(/feelsLike/i)).toBeNull();
  });
});
