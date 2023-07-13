import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<RouterProvider router={router} />, rootElement);
} else {
  render(<RouterProvider router={router} />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
