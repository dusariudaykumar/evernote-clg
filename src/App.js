import { useLocation } from "react-router-dom";
import { NavBar, SideNav } from "./Components";
import { RoutersPath } from "./Routes/RoutersPath";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ToastContainer
        theme="theme"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
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
