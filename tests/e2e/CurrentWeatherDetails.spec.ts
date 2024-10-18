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

test.describe("Display Current Weather Details", () => {
  test("Should display current temperature", async ({ page }) => {
    await headerPage.searchForLocation('Katowice');
    const temperatureValue = await currentWeatherPage.getTemperatureValue()
    expect(temperatureValue).toBeGreaterThan(0);

  })

  test("Should display current humidity", async ({ page }) => {
    await headerPage.searchForLocation('Katowice');
    const humidityValue = await conditionWeatherPage.getHumidityValue();
    expect(humidityValue).toBeGreaterThan(0);

  })

  test("Should display current pressure", async () => {

  });

  test("Should display current visibility", async ({ page }) => {

  });

  test("Should display current Feels Like", async ({ page }) => {

  });

  test("Should display current Air Quality", async ({ page }) => {

  });

  test("Should display current Air Quality2", async ({ page }) => {

  });

  test("Should display current UV", async ({ page }) => {

  });

  test("Should display current Wind", async ({ page }) => {

  });

  test("Should display current Sunrise and Sunset", async ({ page }) => {

  });
});
