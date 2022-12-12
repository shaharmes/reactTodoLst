import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {SignIn} from "./pages/SignIn";
import {Welcome} from "./pages/Welcome";
import React from "react";
import { Home } from "./pages/Home";



export const router = createBrowserRouter([
  {
    element: <Welcome/>,
    children: [
      { path: '/',
        element: <Home/>
            
      },  
      { path: 'home',
        element: <Home/>
            
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
        path: 'todos',
        element: <App/>
      },
    ]
  },

]);