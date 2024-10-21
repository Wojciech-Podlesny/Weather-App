import { test, expect } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  await headerPage.goToHomePage();
});

test.describe("Dark Mode Toggle", () => {
  test("Switches to Dark Mode when Dark Mode icon is clicked", async () => {
    const isDarkModeVisible = await headerPage.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
    await headerPage.toggleDarkMode(false);
    const isLightModeVisible = await headerPage.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
  });

  test("Switches to Light Mode when Light Mode icon is clicked", async () => {
    await headerPage.toggleDarkMode(true);
    const isLightModeVisible = await headerPage.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
    await headerPage.toggleDarkMode(false);
    const isDarkModeVisible = await headerPage.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
  });
  test("Ensures visibility of Dark Mode and Light Mode icons", async () => {
    const isDarkModeVisible = await headerPage.isDarkModeToggleVisible();
    expect(isDarkModeVisible).toBeTruthy();
    await headerPage.toggleDarkMode(true);
    const isLightModeVisible = await headerPage.isLightModeToggleVisible();
    expect(isLightModeVisible).toBeTruthy();
  });

  test("Handles rapid toggling between Dark Mode and Light Mode", async () => {
    for (let i = 0; i < 5; i++) {
      await headerPage.toggleDarkMode(true);
      await headerPage.toggleDarkMode(false);
    }
    expect(await headerPage.isDarkModeToggleVisible()).toBeTruthy();
  });
});
