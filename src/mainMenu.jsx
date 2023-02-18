import "./mainMenu.css";

function MainMenu() {
  return (
    <div className="main-menu">
      <div className="main-title">
        <h2>Algorithm Visualizer</h2>
      </div>
      <div className="menu-options">
        <button>Path Finder Visualizer</button>
        <button>Sorting Visualizer</button>
      </div>
    </div>
  );
}

export default MainMenu;
