import { NavBar } from "./Components";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { RoutersPath } from "./Routes/RoutersPath";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutersPath />
    </div>
  );
}

export default App;
