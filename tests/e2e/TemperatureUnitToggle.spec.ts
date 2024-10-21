import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";
import { CurrentWeatherPage } from "../pages/CurrentWeather.page";

let headerPage: HeaderPage;
let currentWeatherPage: CurrentWeatherPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  currentWeatherPage = new CurrentWeatherPage(page);
  await headerPage.goToHomePage();
});

test.describe("Unit Toggle (Celsius / Fahrenheit)", () => {
  test("Toggles between Celsius and Fahrenheit for temperature units", async () => {
    const temp = await currentWeatherPage.getCelsiusTemperature();
    expect(temp).toContain("°C");

    await currentWeatherPage.clickToggleTemperatureUnit();
    const temperature = await currentWeatherPage.getFahrenheitTemperature();
    expect(temperature).toContain("°F");

    await currentWeatherPage.clickToggleTemperatureUnit();
    const temperature2 = await currentWeatherPage.getCelsiusTemperature();
    expect(temperature2).toContain("°C");
  });
});
