import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Payment from './Payment';

class PaymentContainer extends React.Component {
  handlePayment = (token) => {
    // Send the token to your server for processing
    // You will need to implement this server-side logic
  };

  render() {
    return (
      <StripeProvider apiKey="pk_test_51O4SvPSDahWJQZEv5yys2hjWJnHCEm6WIWmkmE75uXXyLxlBBsnHWTShVPmyUc7kTUzqJsCWR8T973S2wz9QxHHJ00QJv36NnA">
        <Elements>
          <Payment handlePayment={this.handlePayment} />
        </Elements>
      </StripeProvider>
    );
  }
}

export default PaymentContainer;