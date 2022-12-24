import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            <a
              href="https://github.com/rookiebehaviour/awesome-weather-app"
              target="_blank"
              rel="noreferrer"
              className="Footer-link"
            >
              Open-source
            </a>
            Coded by Jacqueline Mason
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
