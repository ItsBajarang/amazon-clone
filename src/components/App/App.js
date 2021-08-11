import "./App.css";
import React, { useEffect } from "react";
import Home from "../Home/Home";
import Header from "../Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { auth } from "../../firebase";
import { useStateValue } from "../../state/StateProvider";
import Payment from "../Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "../Orders/Orders";

const promise = loadStripe(
  "pk_test_51GzyGdJQp4DMEXSPAuA5N79E6SoXm15aormhKb5orvasrjpDAOFLNCYqjbOqap5LfrGON6a4CkBsXbBMnvokn0ba00c1wmjq9B"
);

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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
