import { test, expect } from "@playwright/test";
import { SidebarPage } from "../pages/Sidebar.page";
import { HeaderPage } from "../pages/Header.page";



test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Sidebar Components tests", () => {
  test("Should navigate to Dashboard on click", async ({ page }) => {
    const sidebarPage = new SidebarPage(page);
    await sidebarPage.clickDashboard();
    await sidebarPage.checkUrl("/");
  });

  test("Should navigate to Maps on click", async ({ page }) => {
    const sidebarPage = new SidebarPage(page);
    await sidebarPage.clickMaps();
    await sidebarPage.checkUrl("/maps");
  });

  test("Should navigate to SavedLocation on click", async ({ page }) => {
    const sidebarPage = new SidebarPage(page);
    await sidebarPage.clickSavedLocation();
    await sidebarPage.checkUrl("/savedLocation");
  });

  test("Should navigate to Settings on click", async ({ page }) => {
    const sidebarPage = new SidebarPage(page);
    await sidebarPage.clickSettings();
    await sidebarPage.checkUrl("/settings");
  });

  test("Sidebar should be visible and all links should be visible", async ({
    page,
  }) => {
    const sidebarPage = new SidebarPage(page);
    expect(await sidebarPage.isSidebarVisible()).toBe(true);
    const linksVisibility = await sidebarPage.areAllLinksVisible();
    for (const isVisible of linksVisibility) {
      expect(isVisible).toBe(true);
    }
  });
});
