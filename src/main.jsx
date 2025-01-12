
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import RoomDetails from "./components/RoomDetails/RoomDetails.jsx";
import Booking from "./components/Booking/Booking.jsx";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import NotFound from "./components/NotFound.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import AddRoom from "./components/AddRooms/AddRoom.jsx";
import EditRoom from "./components/EditRoom/EditRoom.jsx";
import DeleteRoom from "./components/DeleteRoom/DeleteRoom.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="dashbord" element={<Dashboard />} />
      <Route path="/add-room" element={<AddRoom />} />

      <Route path="/edit-room/:id" element={<EditRoom />} />
      <Route path="/delete-room/:room.id" element={<DeleteRoom />} />

      <Route
        path="room/:roomId"
        element={
          <ErrorBoundary>
            <RoomDetails />
          </ErrorBoundary>
        }
      />
      <Route path="booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
