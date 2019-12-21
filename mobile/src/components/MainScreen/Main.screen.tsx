import React, { FunctionComponent } from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import Separator from '../shared/Separator';
import Header from '../shared/Header';
import CustomStatusBar from '../shared/CustomStatusBar';
import Typography from '../shared/Typography';
import { useQuery } from '@apollo/react-hooks';
import { estatesQuery, IEstatesQuery } from '../../graphql/queries';

const MainScreen: FunctionComponent = () => {
  const { data, error, loading, refetch } = useQuery<IEstatesQuery>(
    estatesQuery
  );

  return (
    <>
      <CustomStatusBar />
      <Container>
        <Header />
        {error != null && (
          <ErrorContainer>
            <Typography>{'Ops, something went wrong :()'}</Typography>
          </ErrorContainer>
        )}
        <FlatList
          data={data && data.estates}
          renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={refetch}
          ItemSeparatorComponent={Separator}
          onEndReached={() => {}}
        />
      </Container>
    </>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ErrorContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export default MainScreen;
