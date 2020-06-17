import React from "react";
import "./App.css";
import { Navbar } from "./components";
import Routes from "./Routes";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes />
        </div>
    );
}

export default App;
