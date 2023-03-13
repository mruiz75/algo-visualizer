import React from "react";
import PathFinderVisualizer from "./components/PathFinder/Layout";
import "./App.css";
import MainMenu from "./mainMenu";
import { Route, Routes } from "react-router";
import Visualizer from "./components/SortingVisualizer/Layout";
import ErrorPage from "./error-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/path-finder" element={<PathFinderVisualizer />} />
        <Route path="/sorting" element={<Visualizer />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
