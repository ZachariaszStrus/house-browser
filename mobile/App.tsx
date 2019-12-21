import React from 'react';
import { ApolloProvider } from '@apollo/react-components';
import { ThemeProvider } from 'styled-components';
import mainTheme from './src/styles/theme/main.theme';
import AppNavigation from './src/navigation/AppNavigation';
import apolloClient from './src/services/apollo-client';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={mainTheme}>
        <AppNavigation />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
