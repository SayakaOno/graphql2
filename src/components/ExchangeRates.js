import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const query = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const renderCurrency = ({ loading, error, data }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  return data.rates.map(({ currency, rate }) => {
    return (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    );
  });
};

const ExchangeRates = () => {
  return <Query query={query}>{props => renderCurrency(props)}</Query>;
};

export default ExchangeRates;
