import { render, screen } from "@testing-library/react";
import { Visibility } from "./Visibility";
import { useTheme } from "../../hooks/useTheme";
import { useWeather } from "../../hooks/useWeather";

type ThemeContextType = {
  isDarkMode: boolean;
};

type WeatherContextType = {
  weatherData: {
    visibility: string;
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

describe("Visibility Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });
    mockedUseWeather.mockReturnValue({ weatherData: null });
    render(<Visibility />);
    expect(screen.getByText(/Visibility/i)).toBeInTheDocument();
  });
});
