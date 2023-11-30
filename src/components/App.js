import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Flights from './Flights';
import Hotels from './Hotels';
import Checkout from './Checkout';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
        <Route path="/" exact component={Flights} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/register" component={UserRegistration} />
        <Route path="/login" component={UserLogin} />
    </Routes>
    </Router>
  );
}

export default App;
