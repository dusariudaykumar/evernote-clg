import { useLocation } from "react-router-dom";
import { NavBar, SideNav } from "./Components";
import { RoutersPath } from "./Routes/RoutersPath";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="main-wrapper">
        {location.pathname !== "/" && <NavBar />}
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/" && <SideNav />}
        <RoutersPath />
      </div>
    </div>
  );
}

export default App;
