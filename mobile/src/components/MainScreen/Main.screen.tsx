import React, { FunctionComponent, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import HeaderTop from '../shared/HeaderTop';
import Typography from '../shared/Typography';
import { useQuery } from '@apollo/react-hooks';
import {
  ESTATES_QUERY,
  IEstatesQuery,
  IEstatesQueryVariables
} from '../../graphql/queries';
import ListItem from './ListItem/ListItem';
import themedColor from '../../styles/theme/themedColor';
import SearchBar from './SearchBar/SearchBar';
import Filters from './Filters/Filters';
import { EstateFilter } from '../../../../api/src/estates/models/estate-filter';

const MainScreen: FunctionComponent = () => {
  const [filter, setFilter] = useState<EstateFilter | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const { data, error, loading, refetch } = useQuery<
    IEstatesQuery,
    IEstatesQueryVariables
  >(ESTATES_QUERY, { variables: { filter: null, city: null } });
  const [filterOpened, setFilterOpened] = useState(false);

  const onFilterSubmit = useCallback(
    (newFilter?: EstateFilter) => {
      refetch({ filter: newFilter, city: city }).then();
      setFilter(newFilter);
      setFilterOpened(false);
    },
    [city, refetch]
  );

  const onCitySearch = useCallback(
    (newCity?: string) => {
      refetch({ filter: filter, city: newCity }).then();
      setCity(newCity);
      setFilterOpened(false);
    },
    [filter, refetch]
  );

  return (
    <Container>
      <HeaderTop />
      <SearchBar
        onFilterClick={() => setFilterOpened(!filterOpened)}
        onSearch={onCitySearch}
      />
      <Filters filterOpened={filterOpened} onFilterSubmit={onFilterSubmit} />

      {error != null && (
        <ErrorContainer>
          <Typography>{error.message}</Typography>
        </ErrorContainer>
      )}

      {data && data.estates.length === 0 && (
        <ErrorContainer>
          <Typography>{'No results'}</Typography>
        </ErrorContainer>
      )}

      <FlatList
        data={data ? data.estates : []}
        renderItem={({ item }) => <ListItem estate={item} />}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={refetch}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${themedColor('PRIMARY_LIGHT')};
`;

const ErrorContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export default MainScreen;
