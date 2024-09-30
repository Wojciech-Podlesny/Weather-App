import { test, expect } from "@playwright/test";
import { HeaderPage } from "./pages/headerPage";
import { HourlyForecastPage } from "./pages/hourlyForecast";


let hourlyForecast: HourlyForecastPage

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage()
  hourlyForecast = new HourlyForecastPage(page); 
});

test.describe("HourlyForecast Components tests", () => {
  test("Should display Today tab as active by default", async () => {
    const today = await hourlyForecast.isTabActive("Today");
    expect(today).toBe(true);
  });

  test("Should switch tabs correctly", async () => {
    await hourlyForecast.clickTomorrow();
    expect(await hourlyForecast.isTabActive("Tomorrow")).toBe(true);
    expect(await hourlyForecast.isTabActive("Today")).toBe(false);

    await hourlyForecast.clickAfterTomorrow();
    expect(await hourlyForecast.isTabActive("AfterTomorrow")).toBe(true);
    expect(await hourlyForecast.isTabActive("Tomorrow")).toBe(false);
    expect(await hourlyForecast.isTabActive("Today")).toBe(false);
  });

  test("Should show all tabs", async () => {
    expect(await hourlyForecast.areAllTabsVisible()).toEqual([true, true, true]);
  });
});
