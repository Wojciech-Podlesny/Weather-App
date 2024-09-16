import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { useTheme } from "../../hooks/useTheme";

type ThemeContextType = {
  isDarkMode: boolean;
};

jest.mock("../../hooks/useTheme", () => ({
  useTheme: jest.fn(),
}));

const mockedUseTheme = useTheme as unknown as jest.MockedFunction<
  () => ThemeContextType
>;

describe("Footer Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing when no weather data is available", () => {
    mockedUseTheme.mockReturnValue({ isDarkMode: false });

    render(<Footer />);
    expect(screen.getByText(/Wojciech Podleśny/i)).toBeInTheDocument();

  });
});
