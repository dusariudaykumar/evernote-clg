import { useLocation } from "react-router-dom";
import { NavBar } from "./Components";
import { RoutersPath } from "./Routes/RoutersPath";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <RoutersPath />
    </div>
  );
}

export default App;
