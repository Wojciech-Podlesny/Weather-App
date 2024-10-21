import { test, expect } from "@playwright/test";
import { SidebarPage } from "../pages/Sidebar.page";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;
let sidebarPage: SidebarPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  sidebarPage = new SidebarPage(page);
  await headerPage.goToHomePage();
});

test.describe("Sidebar Information", () => {
  test("Navigates to Dashboard upon clicking", async ({ page }) => {
    await sidebarPage.clickDashboard();
    await sidebarPage.checkUrl("/");
  });

  test("Navigates to Maps upon clicking", async () => {
    await sidebarPage.clickMaps();
    await sidebarPage.checkUrl("/maps");
  });

  test("Navigates to Saved Locations upon clicking", async () => {
    await sidebarPage.clickSavedLocation();
    await sidebarPage.checkUrl("/savedLocation");
  });

  test("Navigates to Settings upon clicking", async () => {
    await sidebarPage.clickSettings();
    await sidebarPage.checkUrl("/settings");
  });

  test("Sidebar and all links should be visible", async () => {
    expect(await sidebarPage.isSidebarVisible()).toBe(true);
    const linksVisibility = await sidebarPage.areAllLinksVisible();
    for (const isVisible of linksVisibility) {
      expect(isVisible).toBe(true);
    }
  });
});
