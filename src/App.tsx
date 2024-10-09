import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "./context/DarkModeContext";
import { WeatherProvider } from "./context/LocationSearchContext";
import { UnitProvider } from "./context/UnitContext";
import { ErrorBoundary } from "./hoc/ErrorBoundary";
import { FavoriteCitiesProvider } from "./context/FavouriteCitiesConext";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Maps = lazy(() => import("./pages/Maps"));
const SavedLocation = lazy(() => import("./pages/SavedLocation"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <ErrorBoundary>
      <UnitProvider>
        <WeatherProvider>
          <ThemeProvider>
            <FavoriteCitiesProvider>
              <Router>
                <div className="flex">
                  <Sidebar />
                  <div className="w-full m-5">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/maps" element={<Maps />} />
                        <Route
                          path="/savedLocation"
                          element={<SavedLocation />}
                        />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </div>
                </div>
              </Router>
            </FavoriteCitiesProvider>
          </ThemeProvider>
        </WeatherProvider>
      </UnitProvider>
    </ErrorBoundary>
  );
};

export default App;
