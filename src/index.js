import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './components/App';
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/MainPage";
import Awakening from "./stage0/Awakening";
import MessageAwakening from './stage0/MessageAwakening';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "login",
        element: <LoginPage/>,
    },
    {
        path: "signup",
        element: <SignupPage/>,
    },
    {
        path: "home",
        element: <HomePage/>,
    },
    {
        path: "awakening",
        element: <Awakening/>,
    },
    {
        path: "messageawakening",
        element: <MessageAwakening/>,
    }
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
