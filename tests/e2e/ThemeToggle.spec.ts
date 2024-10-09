import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";



let header: HeaderPage;
test.beforeEach(async ({ page }) => {
  header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Dark Mode tests", () => {
  test("Switching to Dark Mode when clicking the Dark Mode icon", async () => {
    const isDarkModeVisible = await header.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
    await header.toggleDarkMode(false);
    const isLightModeVisible = await header.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
  });

  test("Switching to Light Mode when clicking the Light Mode icon", async () => {
    await header.toggleDarkMode(true);
    const isLightModeVisible = await header.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
    await header.toggleDarkMode(false);
    const isDarkModeVisible = await header.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
  });
  test("Visibility of Dark Mode and Light Mode icons", async () => {
    const isDarkModeVisible = await header.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
    await header.toggleDarkMode(true);
    const isLightModeVisible = await header.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
  });

  test("Rapid toggling between Dark Mode and Light Mode", async () => {
    for (let i = 0; i < 5; i++) {
      await header.toggleDarkMode(true);
      await header.toggleDarkMode(false);
    }
    expect(await header.isDarkModeToggleVisible()).toBeTruthy();
  });
});
