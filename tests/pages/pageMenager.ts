import { Page } from "@playwright/test";
import { HeaderPage } from "./headerPage";
import { DashboardPage } from "./dashboardPage";
import { HourlyForecastPage } from "./hourlyForecast";
import { SidebarPage } from "./sidebarPage";

export class PageManager {
  private readonly page: Page;
  private readonly headerPage: HeaderPage;
  private readonly dashboardPage: DashboardPage;
  private readonly hourlyForecastPage: HourlyForecastPage;
  private readonly sidebarPage: SidebarPage;

  constructor(page: Page) {
    this.page = page;
    this.headerPage = new HeaderPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.hourlyForecastPage = new HourlyForecastPage(this.page);
    this.sidebarPage = new SidebarPage(this.page);
  }

  header(): HeaderPage {
    return this.headerPage;
  }

  dashboard(): DashboardPage {
    return this.dashboardPage;
  }

  forecast(): HourlyForecastPage {
    return this.hourlyForecastPage;
  }

  sidebar(): SidebarPage {
    return this.sidebarPage;
  }
}
