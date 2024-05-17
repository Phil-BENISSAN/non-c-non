import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import FoodPage from './pages/FoodPage.jsx';
import GardenPage from './pages/GardenPage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import Food from './components/Food.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/aliments",
        element: <FoodPage />,
      },
      {
        path: "/aliments/:food",
        element: <Food />,
      },
      {
        path: "/potager",
        element: <GardenPage />,
      },
      {
        path: "/informations",
        element: <InfoPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
