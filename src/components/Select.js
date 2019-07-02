import React from 'react';
import { Query } from 'react-apollo';
import { query } from '../queries';

export default props => {
  return (
    <Query query={query}>
      {({ loading, data }) => {
        return loading ? (
          <p>loading...</p>
        ) : (
          <select onChange={e => props.onChange(e.target.value)}>
            {data.rates.map(rate => {
              return (
                <option value={props.currency} key={rate.currency}>
                  {rate.currency}
                </option>
              );
            })}
            ;
          </select>
        );
      }}
    </Query>
  );
};
