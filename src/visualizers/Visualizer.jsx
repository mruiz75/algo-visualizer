import SortingVisualizer from "./sorting";
import "./Visualizer.css";

function Visualizer() {
  return (
    <div className="algorithm-visualizer">
      <div className="top-bar">
        <button className="back-button">Back to Menu</button>
        <h3 className="title">Sorting</h3>
      </div>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default Visualizer;
