import REACT, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from './Footer';

const promise = loadStripe('pk_test_51JFECfSF68PZqS4QwIESuyVaG5CV9RlfYQX6Qv81QnRRa50zIOtTf1Ftm86Z04K170lywHnVHmEk3oqHRD7PCnyj002sWB1QnZ');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      // will only run once when the app component loads

      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>> ', authUser);

        if(authUser) {
          // the user just logged in / the user was logged in

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // the user is logged out 
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])

  return (
   <Router>
    <div className="app">
      
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      <Route path="/checkout">
         <Header />
         <Checkout /> 
         <Footer />
      </Route>
      <Route path="/payment">
         <Header /> 
         <Elements stripe={promise}>
            <Payment />
         </Elements>
         <Footer />
      </Route>
      <Route path="/">
       <Header />
         <Home/> 
       <Footer />  
      </Route>
      </Switch>  
    </div>
   </Router>
  );
}

export default App;
