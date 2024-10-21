import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";
import {CurrentWeatherPage} from "../pages/CurrentWeather.page";
import {ConditionWeatherPage} from "../pages/ConditionWeather.page";

let headerPage: HeaderPage;
let conditionWeatherPage: ConditionWeatherPage;
let currentWeatherPage: CurrentWeatherPage;


test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  conditionWeatherPage = new ConditionWeatherPage(page);
  currentWeatherPage = new CurrentWeatherPage(page);
  await headerPage.goToHomePage();
});

test.describe("Displaying Current Weather Data", () => {
  test("Displays the current temperature", async ({ page }) => {
    await headerPage.searchForLocation('Katowice');
    const temperatureValue = await currentWeatherPage.getTemperatureValue()
    expect(temperatureValue).toBeGreaterThan(0);

  })

  test("Displays the current humidity", async ({ page }) => {
    await headerPage.searchForLocation('Katowice');
    const humidityValue = await conditionWeatherPage.getHumidityValue();
    expect(humidityValue).toBeGreaterThan(0);

  })

  test("Displays the current pressure", async () => {
    await headerPage.searchForLocation('Katowice');
    const pressureValue = await conditionWeatherPage.getPressureValue()
    expect(pressureValue).toBeGreaterThan(0);
  });

  test("Displays the current visibility", async () => {
    await headerPage.searchForLocation('Katowice');
    const visibilityValue = await conditionWeatherPage.getVisibilityValue();
    expect(visibilityValue).toBeGreaterThan(0);
  });

  test("Displays the current feels like temperature", async () => {
     await headerPage.searchForLocation('Katowice');
     const feelsLikeValue = await conditionWeatherPage.getFeelsLikeValue();
     expect(feelsLikeValue).toBeGreaterThan(0);

  });

  test("Displays the current air quality", async () => {
    await headerPage.searchForLocation('Katowice');
    const airQualityValue = await conditionWeatherPage.getAirQualityValue()
    expect(airQualityValue).toBeGreaterThan(0);
  });

  test("Displays the current air quality2", async () => {
    await headerPage.searchForLocation('Katowice');
    const airQuality2Value = await conditionWeatherPage.getAirQuality2Value()
    expect(airQuality2Value).toBeGreaterThan(0);

  });

  test("Displays the current UV index", async () => {
    await headerPage.searchForLocation('Katowice');
    const uvIndexValue = await conditionWeatherPage.getUVIndexValue()
    expect(uvIndexValue).toBeGreaterThan(0);
  });

  test("Displays the current wind speed", async () => {
    await headerPage.searchForLocation('Katowice');
    const windValue = await conditionWeatherPage.getWindValue()
    expect(windValue).toBeGreaterThan(0);
  });

  test("Displays the current sunrise and sunset times", async ({ page }) => {
     await headerPage.searchForLocation('Katowice');
     const sunsetValue = await conditionWeatherPage.getSunsetValue()
     expect(sunsetValue).toBeGreaterThan(0);
     const sunriseValue = await conditionWeatherPage.getSunriseValue()
     expect(sunriseValue).toBeGreaterThan(0);

  });
});
