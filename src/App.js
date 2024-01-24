import "./App.css";
import Weather from "./Weather";
import FooterLinks from "./FooterLinks";

function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <Weather />
      <FooterLinks className="FooterLinks"/>
    </div>
  );
}

export default App;
