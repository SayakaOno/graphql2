import React from 'react';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
import { query, getCurrencyQuery } from '../queries';

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

const ExchangeRates = props => {
  console.log(props);
  return <Query query={query}>{props => renderCurrency(props)}</Query>;
  // return <div>{renderCurrency(props)}</div>;
};

export default graphql(getCurrencyQuery, {
  options: props => {
    return {
      variables: { currency: props.currency }
    };
  }
})(ExchangeRates);
