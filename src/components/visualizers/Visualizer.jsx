import { NavLink } from "react-router-dom";
import SortingVisualizer from "./sorting";
import "./Visualizer.css";

function Visualizer() {
  return (
    <div className="algorithm-visualizer">
      <div className="top-bar">
        <NavLink to="/">
          <button className="back-button">Back to Menu</button>
        </NavLink>
        <h3 className="title">Sorting</h3>
      </div>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default Visualizer;
