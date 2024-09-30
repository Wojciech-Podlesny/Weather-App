import { Page } from "@playwright/test";

export class HelperBase {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async visitWebsite() {
        await this.page.goto("https://weather-app-xs.vercel.app/")
    }
}