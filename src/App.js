import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routers from "./Routers/routers";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routers />
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;
