import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Header from '../shared/Header';
import Typography from '../shared/Typography';
import { useQuery } from '@apollo/react-hooks';
import { estatesQuery, IEstatesQuery } from '../../graphql/queries';
import ListItem from './ListItem/ListItem';
import themedColor from '../../styles/theme/themedColor';

const MainScreen: FunctionComponent = () => {
  const { data, error, loading, refetch } = useQuery<IEstatesQuery>(
    estatesQuery
  );

  return (
    <Container>
      <Header />
      {error != null && (
        <ErrorContainer>
          <Typography>{'Ops, something went wrong :()'}</Typography>
        </ErrorContainer>
      )}
      <FlatList
        data={data && data.estates}
        renderItem={({ item }) => <ListItem estate={item} />}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={refetch}
        onEndReached={() => {}}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${themedColor('PRIMARY_LIGHT')};
`;

const ErrorContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export default MainScreen;
