// Import necessary React libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root for rendering the React application
const root = ReactDOM.createRoot(rootElement);

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
