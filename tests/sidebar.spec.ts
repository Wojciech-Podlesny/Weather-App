import { test, expect } from "@playwright/test";
import { SidebarPage } from "./pages/sidebarPage";
import { HeaderPage } from "./pages/headerPage";

let sidebarPage: SidebarPage;

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage()
  sidebarPage = new SidebarPage(page);
});

test.describe("Sidebar Components tests", () => {
  test("Should navigate to Dashboard on click", async () => {
    await sidebarPage.clickDashboard();
    await sidebarPage.checkUrl("/");
  });

  test("Should navigate to Maps on click", async () => {
    await sidebarPage.clickMaps();
    await sidebarPage.checkUrl("/maps");
  });

  test("Should navigate to SavedLocation on click", async () => {
    await sidebarPage.clickSavedLocation();
    await sidebarPage.checkUrl("/savedLocation");
  });

  test("Should navigate to Settings on click", async () => {
    await sidebarPage.clickSettings();
    await sidebarPage.checkUrl("/settings");
  });

  test("Sidebar should be visible and all links should be visible", async () => {
    expect(await sidebarPage.isSidebarVisible()).toBe(true);
    const linksVisibility = await sidebarPage.areAllLinksVisible();
    for (const isVisible of linksVisibility) {
      expect(isVisible).toBe(true);
    }
  });
});
