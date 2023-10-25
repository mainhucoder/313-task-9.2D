import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PremiumPlans from './Plans';
import Home from './Main';
import Payment from './Payment';

const stripePromise = loadStripe('pk_test_51O4gk5SAt6eGx4EUQ02TcN69kHxiobGqCT7A2VbB7qbRF4b1TpkD0x2TFnPMaCFkklSUwBIqMbl1jXIxbvn6f6Rb00eQ84Lq9q');

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PremiumPlans />} />
          <Route path="/payment" element={<Elements stripe={stripePromise}><Payment /></Elements>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;