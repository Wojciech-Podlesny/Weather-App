import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";
import { CurrentWeatherPage } from "../pages/CurrentWeather.page";

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Current Weather tests", () => {
  test("Temperature unit toggle should switch between Celsius and Fahrenheit'", async ({
    page,
  }) => {
    const currentWeather = new CurrentWeatherPage(page);

    const temp = await currentWeather.getCelsiusTemperature();
    expect(temp).toContain("°C");

    await currentWeather.clickToggleTemperatureUnit();
    const temperature = await currentWeather.getFahrenheitTemperature();
    expect(temperature).toContain("°F");

    await currentWeather.clickToggleTemperatureUnit();
    const temperature2 = await currentWeather.getCelsiusTemperature();
    expect(temperature2).toContain("°C");
  });
});
