import "./App.css";
import React, { useEffect } from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { auth } from "../../firebase";
import { useStateValue } from "../../state/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The use is ", authUser);
      if (authUser) {
        // user is just logged in/ user was looged in
        console.log("I am here in autUser condition");
        dispatch({
          type: "SET_USER",
          payload: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          payload: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
