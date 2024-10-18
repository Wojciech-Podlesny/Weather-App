import { Page } from "@playwright/test";
import { HeaderPage } from "../../pages/Header.page";
import { HourlyForecastPage } from "../../pages/HourlyForecast.page";
import { SidebarPage } from "../../pages/Sidebar.page";
import { ConditionWeatherPage } from "../../pages/ConditionWeather.page";
import { FooterPage } from "../../pages/Footer.page";
import { WeatherOtherCitiesListPage } from "../../pages/WeatherOtherCitiesList.page";
import { CurrentWeatherPage } from "../../pages/CurrentWeather.page";

export class PageManager {
  private readonly page: Page;
  private readonly headerPage: HeaderPage;
  private readonly hourlyForecastPage: HourlyForecastPage;
  private readonly sidebarPage: SidebarPage;
  private readonly conditionWeatherPage: ConditionWeatherPage;
  private readonly footerPage: FooterPage;
  private readonly weatherOtherCitiesListPage: WeatherOtherCitiesListPage;
  private readonly currentWeatherPage: CurrentWeatherPage;

  constructor(page: Page) {
    this.page = page;
    this.headerPage = new HeaderPage(this.page);
    this.hourlyForecastPage = new HourlyForecastPage(this.page);
    this.sidebarPage = new SidebarPage(this.page);
    this.conditionWeatherPage = new ConditionWeatherPage(this.page);
    this.footerPage = new FooterPage(this.page);
    this.weatherOtherCitiesListPage = new WeatherOtherCitiesListPage(this.page);
    this.currentWeatherPage = new CurrentWeatherPage(this.page);
  }

  header(): HeaderPage {
    return this.headerPage;
  }

  hourlyForecast(): HourlyForecastPage {
    return this.hourlyForecastPage;
  }

  sidebar(): SidebarPage {
    return this.sidebarPage;
  }

  conditionWeather(): ConditionWeatherPage {
    return this.conditionWeatherPage;
  }

  footer(): FooterPage {
    return this.footerPage;
  }

  weatherOtherCitiesList(): WeatherOtherCitiesListPage {
    return this.weatherOtherCitiesListPage;
  }

  currentWeather(): CurrentWeatherPage {
    return this.currentWeatherPage;
  }
}
