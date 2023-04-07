import { Route, NavLink, Routes } from "react-router-dom";
// import SortingVisualizer from "./components/SortingVisualizer/Sorting";
// import PathFinderVisualizer from "./components/PathFinder/PathFinderVisualizer";
import "./mainMenu.css";

function MainMenu() {
  return (
    <div className="main-menu">
      <div className="main-title">
        <h2>Algorithm Visualizer</h2>
      </div>
      <div className="menu-options">
        <NavLink to="/path-finder">Path Finder Visualizer</NavLink>
        <NavLink to="/sorting">Sorting Visualizer</NavLink>
      </div>
    </div>
  );
}

export default MainMenu;
