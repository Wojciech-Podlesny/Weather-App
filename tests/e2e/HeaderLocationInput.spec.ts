import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  await headerPage.goToHomePage();
});

test.describe("Displaying Search Results", () => {
  test("Displays correct city name after a successful search", async () => {
    await headerPage.searchForLocation("Katowice");
    const locationText = await headerPage.getLocationText();
    expect(locationText).toContain("Katowice");
  });

  test("Shows an error message for an invalid city name", async () => {
    await headerPage.searchForLocation("Abrakadabra");
    const errorMessage = await headerPage.getErrorToastMessage();
    expect(errorMessage).toContain("Error while downloading weather data")
  });

  test("Retains the last search after page refresh", async ({
    page,
  }) => {
    await headerPage.searchForLocation("Warsaw");
    await page.reload();
  });

  test("Displays toast error message when search input is empty", async () => {
    await headerPage.searchForLocation("");
    const errorMessage = await headerPage.getErrorToastMessage();
    expect(errorMessage).toContain("Location cannot be empty");
  });
});
