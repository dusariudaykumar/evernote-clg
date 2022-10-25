import { useLocation } from "react-router-dom";
import { NavBar, SideNav } from "./Components";
import { RoutersPath } from "./Routes/RoutersPath";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
function App() {
  const location = useLocation();
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
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
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/" && (
            <NavBar setIsOpenSideMenu={setIsOpenSideMenu} />
          )}
        {location.pathname !== "/login" &&
          location.pathname !== "/signup" &&
          location.pathname !== "/" && (
            <SideNav isOpenSideMenu={isOpenSideMenu} />
          )}
        <RoutersPath />
      </div>
    </div>
  );
}

export default App;
