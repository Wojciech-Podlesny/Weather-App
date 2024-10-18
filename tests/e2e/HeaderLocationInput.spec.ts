import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  await headerPage.goToHomePage();
});

test.describe("Weather Search Test Suite", () => {
  test("Should display the correct city name after a successful search", async () => {
    await headerPage.searchForLocation("Katowice");
    const locationText = await headerPage.getLocationText();
    expect(locationText).toContain("Katowice");
  });

  test("Should show an error message when an invalid city name is entered", async () => {
    await headerPage.searchForLocation("Abrakadabra");
    const errorMessage = await headerPage.getErrorToastMessage();
    expect(errorMessage).toContain("Error while downloading weather data")
  });

  test("Should retain the last search after refreshing the page", async ({
    page,
  }) => {
    await headerPage.searchForLocation("Warsaw");
    await page.reload();
  });

  test("Toastify error message appears when trying to search for an empty value in the input field", async () => {
    await headerPage.searchForLocation("");
    const errorMessage = await headerPage.getErrorToastMessage();
    expect(errorMessage).toContain("Location cannot be empty");
  });
});
