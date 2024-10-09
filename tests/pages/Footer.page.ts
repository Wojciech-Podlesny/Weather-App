import { Locator, Page } from "@playwright/test";

export class FooterPage {
  private readonly page: Page;
  private readonly footerTextLocator: Locator;
  private readonly githubLink: Locator;
  private readonly linkedinLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footerTextLocator = page.locator('[data-testid="footer-info"]');
    this.githubLink = page.locator('[data-testid="github-link"]');
    this.linkedinLink = page.locator('[data-testid="linkedin-link"]');
  }

  async getFooterText(): Promise<string | null> {
    return await this.footerTextLocator.textContent();
  }

  async isGitHubLinkVisible(): Promise<boolean> {
    return await this.githubLink.isVisible();
  }

  async getGitHubUrl(): Promise<string | null> {
    return await this.githubLink.getAttribute('href');
  }

  async isLinkedInLinkVisible(): Promise<boolean> {
    return await this.linkedinLink.isVisible();
  }

  async getLinkedInUrl(): Promise<string | null> {
    return await this.linkedinLink.getAttribute('href');
  }
}
