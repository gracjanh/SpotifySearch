import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <App />
    </ContextProvider>
);
