import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import WeatherConditions from "./WeatherConditions";
import Search from "./Search";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <WeatherConditions />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
