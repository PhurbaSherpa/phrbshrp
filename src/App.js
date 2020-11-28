import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import Routes from "./Routes";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
