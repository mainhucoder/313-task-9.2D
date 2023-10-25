import React, { useState } from 'react';
// import './PremiumPlans.css';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import './Plans.css';

const Plans = () => {
  // Placeholder data for the pricing plans
  const plans = [
    {
      title: 'Free Plan',
      price: 0,
      benefits: ['Relevant adds', '2 account logins', 'Read expanded news'],
    },
   
    {
      title: 'Premium Plan',
      price: 20,
      benefits: ['No adds', 'Multiple account logins', 'Read & download news', 'Author background', 'Better info'],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  // Store email and amount in state
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Premium Subscription Plans</h1>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-plan-card">
            <h2>{plan.title}</h2>
            <p>${plan.price} USD/month</p>
            <ul>
              {plan.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex}>{benefit}</li>
              ))}
            </ul>

            {/* Select a plan and set the amount */}
            <Link to="/payment">
              <button
                className="payment-button"
                onClick={() => {
                  setSelectedPlan(plan);
                  setAmount(plan.price);
                }}
              >
                Select Plan
              </button>
            </Link>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <Payment amount={amount} setEmail={setEmail} />
      )}
    </div>
  );
};

export default Plans;