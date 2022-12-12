import {Outlet} from "react-router-dom";
import {AuthContext} from "../context/auth";
import {useState} from "react";
import { Navbar } from "../components/NavBar";
import { AppContext } from "../context/appContext";

export function Welcome() {
  const [currentUser, setCurrentUser] = useState(null);
  const [apps, setApps] = useState([]);

  return (
      <AuthContext.Provider value={{
        currentUser,
        setCurrentUser
      }}>
        <AppContext.Provider value={{apps, setApps}}>
            <Navbar />
            <Outlet />
        </AppContext.Provider>
      </AuthContext.Provider>
  );
}


