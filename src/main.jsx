import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import EventDetails from "./Components/EventDetails.jsx";
import ClubEvents from "./Components/ClubEvents.jsx";
import Login from "./Components/Login.jsx";
import UpcomingEvents from "./Components/UpcomingEvents.jsx";
import ClubPanel from "./Components/ClubPanel.jsx";
import AdminPanel from "./Components/AdminPanel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "eventdetails",
    element: <EventDetails />,
  },
  {
    path: "clubevents",
    element: <ClubEvents />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "clubpanel",
    element: <ClubPanel />,
  },
  {
    path: "upComingEvents",
    element: <UpcomingEvents />,
  },
  {
    path: "adminpanel",
    element: <AdminPanel />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);
