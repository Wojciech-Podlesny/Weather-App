import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";
import { HourlyForecastPage } from "../pages/HourlyForecast.page";

let headerPage: HeaderPage;
let hourlyForecastPage: HourlyForecastPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  hourlyForecastPage = new HourlyForecastPage(page);
  await headerPage.goToHomePage();
});

test.describe("Hourly Forecast Tabs", () => {
  test("Displays the Today tab as active by default", async ({ page }) => {
    const today = await hourlyForecastPage.isTabActive("Today");
    expect(today).toBe(true);
  });

  test("Switches between forecast tabs correctly", async ({ page }) => {;
    await hourlyForecastPage.clickTomorrow();
    expect(await hourlyForecastPage.isTabActive("Tomorrow")).toBe(true);
    expect(await hourlyForecastPage.isTabActive("Today")).toBe(false);

    await hourlyForecastPage.clickAfterTomorrow();
    expect(await hourlyForecastPage.isTabActive("AfterTomorrow")).toBe(true);
    expect(await hourlyForecastPage.isTabActive("Tomorrow")).toBe(false);
    expect(await hourlyForecastPage.isTabActive("Today")).toBe(false);
  });

  test("Shows all available forecast tabs", async ({ page }) => {
    expect(await hourlyForecastPage.areAllTabsVisible()).toEqual([
      true,
      true,
      true,
    ]);
  });
});
