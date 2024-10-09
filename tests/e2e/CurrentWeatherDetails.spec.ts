import { test } from "@playwright/test";
import { HeaderPage } from "../pages/Header.page";

test.beforeEach(async ({ page }) => {
  const header = new HeaderPage(page);
  await header.goToHomePage();
});

test.describe("Display Current Weather Details", () => {
  test("Should display current temperature", async ({ page }) => {});

  test("Should display current humidity", async ({ page }) => {});

  test("Should display current pressure", async ({ page }) => {});

  test("Should display current visibility", async ({ page }) => {});

  test("Should display current Feels Like", async ({ page }) => {});

  test("Should display current Air Quality", async ({ page }) => {});

  test("Should display current Air Quality2", async ({ page }) => {});

  test("Should display current UV", async ({ page }) => {});

  test("Should display current Wind", async ({ page }) => {});

  test("Should display current Sunrise and Sunset", async ({ page }) => {});
});
