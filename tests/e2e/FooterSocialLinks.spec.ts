import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/Footer.page";
import { HeaderPage } from "../pages/Header.page";

test.describe("Test stopki", () => {


  test.beforeEach(async ({ page }) => {
    const header = new HeaderPage(page);
    await header.goToHomePage();
  });

  test("Sprawdź tekst w stopce", async ({page}) => {
    const footerPage = new FooterPage(page)
    const footerText = await footerPage.getFooterText();
    expect(footerText).toContain("© 2024 Wojciech Podleśny");
  });

  test("Sprawdź widoczność linku do GitHub", async ({page}) => {
    const footerPage = new FooterPage(page)
    const isGitHubVisible = await footerPage.isGitHubLinkVisible();
    expect(isGitHubVisible).toBeTruthy();
  });

  test("Sprawdź URL linku do GitHub", async ({page}) => {
    const footerPage = new FooterPage(page)
    const gitHubUrl = await footerPage.getGitHubUrl();
    expect(gitHubUrl).toBe("https://github.com/wojciech-podlesny");
  });

  test("Sprawdź widoczność linku do LinkedIn", async ({page}) => {
    const footerPage = new FooterPage(page)
    const isLinkedInVisible = await footerPage.isLinkedInLinkVisible();
    expect(isLinkedInVisible).toBeTruthy();
  });

  test("Sprawdź URL linku do LinkedIn", async ({page}) => {
    const footerPage = new FooterPage(page)
    const linkedInUrl = await footerPage.getLinkedInUrl();
    expect(linkedInUrl).toBe("https://www.linkedin.com/in/wojciech-podlesny");
  });
});
