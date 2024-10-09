import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";
import { HourlyForecastPage } from "../pages/HourlyForecast.page";

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("HourlyForecast Components tests", () => {
  test("Should display Today tab as active by default", async ({ page }) => {
    const hourlyForecast = new HourlyForecastPage(page);
    const today = await hourlyForecast.isTabActive("Today");
    expect(today).toBe(true);
  });

  test("Should switch tabs correctly", async ({ page }) => {
    const hourlyForecast = new HourlyForecastPage(page);
    await hourlyForecast.clickTomorrow();
    expect(await hourlyForecast.isTabActive("Tomorrow")).toBe(true);
    expect(await hourlyForecast.isTabActive("Today")).toBe(false);

    await hourlyForecast.clickAfterTomorrow();
    expect(await hourlyForecast.isTabActive("AfterTomorrow")).toBe(true);
    expect(await hourlyForecast.isTabActive("Tomorrow")).toBe(false);
    expect(await hourlyForecast.isTabActive("Today")).toBe(false);
  });

  test("Should show all tabs", async ({ page }) => {
    const hourlyForecast = new HourlyForecastPage(page);
    expect(await hourlyForecast.areAllTabsVisible()).toEqual([
      true,
      true,
      true,
    ]);
  });
});
