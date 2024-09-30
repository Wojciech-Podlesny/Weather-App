import { test, expect } from "@playwright/test";
import { HeaderPage } from "./pages/headerPage";

let header: HeaderPage;
test.beforeEach(async ({ page }) => {
  header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Weather Search Test Suite", () => {
  test("Should display the correct city name after a successful search", async () => {
    await header.searchForLocation("Warsaw");
    const locationText = await header.getLocationText();
    expect(locationText).toContain("Warsaw");
  });

  test("Should show an error message when an invalid city name is entered", async () => {
    await header.searchForLocation("Abrakadabra");
    const errorMessage = await header.getErrorToastMessage();
    await expect(errorMessage).toContain(
      "Błąd podczas pobierania danych pogodowych"
    );
  });

  test("Should retain the last search after refreshing the page", async ({
    page,
  }) => {
    await header.searchForLocation("Warsaw");
    await page.reload();
  });

  test("Toastify error message appears when trying to search for an empty value in the input field", async () => {
    await header.searchForLocation("");
    const errorMessage = await header.getErrorToastMessage();
    await expect(errorMessage).toContain("Location cannot be empty");
  });
});
