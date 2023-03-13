import { NavLink } from "react-router-dom";
import PathFinderVisualizer from "./PathFinderVisualizer";

function Visualizer() {
  return (
    <div className="algorithm-visualizer">
      <div className="top-bar">
        <NavLink to="/">
          <button className="back-button">Back to Menu</button>
        </NavLink>
        <h3 className="title">Path Finder</h3>
      </div>
      <PathFinderVisualizer></PathFinderVisualizer>
    </div>
  );
}

export default Visualizer;
