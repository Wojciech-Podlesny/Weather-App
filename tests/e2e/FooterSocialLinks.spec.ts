import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/Footer.page";
import { HeaderPage } from "../pages/Header.page";

let headerPage: HeaderPage;
let footerPage: FooterPage;

test.beforeEach(async ({ page }) => {
  headerPage = new HeaderPage(page);
  footerPage = new FooterPage(page);
  await headerPage.goToHomePage();
});

test.describe("Footer", () => {

  test("Verifies the text displayed in the footer", async () => {
    const footerText = await footerPage.getFooterText();
    expect(footerText).toContain("© 2024 Wojciech Podleśny");
  });

  test("Verifies the visibility of the GitHub icon", async () => {
    const isGitHubVisible = await footerPage.isGitHubLinkVisible();
    expect(isGitHubVisible).toBeTruthy();
  });

  test("Validates the URL of the GitHub link", async () => {
    const gitHubUrl = await footerPage.getGitHubUrl();
    expect(gitHubUrl).toBe("https://github.com/wojciech-podlesny");
  });

  test("Verifies the visibility of the Linkedin icon", async () => {
    const isLinkedInVisible = await footerPage.isLinkedInLinkVisible();
    expect(isLinkedInVisible).toBeTruthy();
  });

  test("Validates the URL of the Linkedin link", async () => {
    const linkedInUrl = await footerPage.getLinkedInUrl();
    expect(linkedInUrl).toBe("https://www.linkedin.com/in/wojciech-podlesny");
  });
});