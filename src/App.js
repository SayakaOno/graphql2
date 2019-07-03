import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ExchangeRates from './components/ExchangeRates';
import Select from './components/Select';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

function App() {
  const [currency, setCurrency] = useState('USD');

  return (
    <ApolloProvider client={client}>
      <Select value={currency} onChange={setCurrency} />
      <ExchangeRates currency={currency} />
    </ApolloProvider>
  );
}

export default App;
