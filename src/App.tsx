import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio.tsx";

function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
}

export default App;
