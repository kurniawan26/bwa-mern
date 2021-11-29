import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import landingPage from "pages/landingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
