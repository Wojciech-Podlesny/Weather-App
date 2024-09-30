# Weather App

## Project overview

Weather App is a web application designed to provide users with real-time weather information for any city worldwide. It offers current weather data, an hourly forecast, a map of the selected location, and a temperature graph for the next three days. Built with React, Tailwind CSS, TypeScript, and Chart.js, this application delivers a responsive and interactive user experience.

## Features

- Search for weather information by city name
- View current weather information including temperature, humidity, wind speed and more
- View hourly weather forecast for selected location
- View map of selected location
- View temperature graph for next 3 days with Chart.js
- Detect current location to display weather data
- Comprehensive testing with Jest and React Testing Library to ensure application stability and reliability
- Testing E2E

## Technologies

- HTML
- CSS
- Tailwind CSS
- React
- Typescript
- React Router
- Chart.js
- Jest
- React Testing Library
- Playwright
- WeatherApi API, OpenWeatherMap API

## Application View

<img src="/src/assets/Screenshot_Desktop.png" alt="Desktop">

<img src="/src/assets/Screenshot_Mobile.png" alt="Mobile">

## Getting Started

You can either run the project locally on your machine or simply visit the live version of the app:

https://weather-app-xs.vercel.app/

### Local Installation (Optional)

If you want to run the project locally on your machine, you will need:

- A web browser
- An internet connection
- Node.js
- Yarn or npm

To install the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Wojciech-Podlesny/Weather-App.git`
2. Navigate to the project directory: `cd weather-app`
3. Install the dependencies: `yarn install` or `npm install`
4. Start the development server: `yarn start` or `npm start`
5. Open your browser and visit `http://localhost:3000` to view the app

### Running tests 

To ensure the application functions as expected, comprehensive testing is employed:

- Unit Tests: These tests are run with Jest and React Testing Library. They check individual components and their interactions.

Run tests `yarn test` or `npm test`

- End-to-End (E2E) Tests: These tests are run with Playwright and verify the application's overall functionality by simulating real user interactions.

Run tests `yarn playwright test --ui` or `npm playwright test --ui`


## Author

Developed by [Wojciech Podleśny](https://github.com/Wojciech-Podlesny)

## License

This project is licensed under the ISC license.
