import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import AppRouter from "./router/Router";


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <AppRouter />
            </div>
        </Router>
    );
}

export default App;
