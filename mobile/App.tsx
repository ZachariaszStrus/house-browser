import React from 'react';
import { ApolloProvider } from '@apollo/react-components';
import { ThemeProvider } from 'styled-components';
import mainTheme from './src/styles/theme/main.theme';
import AppNavigation from './src/navigation/AppNavigation';
import apolloClient from './src/services/apollo-client';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Container>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={mainTheme}>
          <AppNavigation />
        </ThemeProvider>
      </ApolloProvider>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

export default App;
