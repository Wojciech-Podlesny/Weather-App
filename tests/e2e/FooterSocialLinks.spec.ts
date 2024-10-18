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

  test("Check the text in the footer", async ({page}) => {
    const footerText = await footerPage.getFooterText();
    expect(footerText).toContain("© 2024 Wojciech Podleśny");
  });

  test("Check the visibility of the GitHub icon", async ({page}) => {
    const isGitHubVisible = await footerPage.isGitHubLinkVisible();
    expect(isGitHubVisible).toBeTruthy();
  });

  test("Check the URL of the GitHub link", async ({page}) => {
    const gitHubUrl = await footerPage.getGitHubUrl();
    expect(gitHubUrl).toBe("https://github.com/wojciech-podlesny");
  });

  test("Check the visibility of the Linkedin icon", async ({page}) => {
    const isLinkedInVisible = await footerPage.isLinkedInLinkVisible();
    expect(isLinkedInVisible).toBeTruthy();
  });

  test("Check the URL of the LinkedIn link", async ({page}) => {
    const linkedInUrl = await footerPage.getLinkedInUrl();
    expect(linkedInUrl).toBe("https://www.linkedin.com/in/wojciech-podlesny");
  });
});