import { gql } from 'apollo-boost';

export const query = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const getCurrencyQuery = gql`
  query($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;
