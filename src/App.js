import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Information from "./components/Information";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/donate" component={Donate} />
        <Route path="/Information" component={Information} />
      </div>
    </BrowserRouter>
  );
}

export default App;
