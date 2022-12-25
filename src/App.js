import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Cincinnati" />
        <footer>
          <a
            href="https://github.com/rookiebehaviour/awesome-weather-app"
            target="_blank"
            rel="noreferrer"
            className="Footer-link"
          >
            Open-source
          </a>{" "}
          coded by Jacqueline Mason
        </footer>
      </div>
    </div>
  );
}

export default App;
