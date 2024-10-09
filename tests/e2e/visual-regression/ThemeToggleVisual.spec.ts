import { test, expect } from "@playwright/test";
import { HeaderPage } from "../../pages/Header.page"

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Theme Toggle Visual Testing", () => {
  test.only("should switch from light to dark mode and match screenshots", async ({
    page,
  }) => {
    const header = new HeaderPage(page);
    const pages = await page.screenshot()
    expect(pages).toMatchSnapshot('dark-mode.png')
    const pages2 = await header.darkModeToggle.screenshot()
    expect(pages2).toMatchSnapshot('dark-lof.png')







    // await page.screenshot({ path: "light-mode.png" });
    // expect(await page.screenshot()).toMatchSnapshot();

    // // Kliknięcie przycisku przełączającego tryb ciemny
    // await header.darkMode(); // Zmień selektor na prawidłowy dla Twojej aplikacji

    // // Zrzut ekranu w trybie ciemnym
    // await page.screenshot({ path: "dark-mode.png" });
    // expect(await page.screenshot()).toMatchSnapshot();
  });
});
