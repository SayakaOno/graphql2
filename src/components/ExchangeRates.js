import React from 'react';
import { graphql } from 'react-apollo';
import { getCurrencyQuery } from '../queries';

const renderCurrency = ({ loading, error, rates }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }
  return rates.map(({ currency, rate }) => {
    return (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    );
  });
};

const ExchangeRates = props => {
  return <div>{renderCurrency(props.data)}</div>;
};

export default graphql(getCurrencyQuery, {
  options: props => {
    return {
      variables: { currency: props.currency }
    };
  }
})(ExchangeRates);
