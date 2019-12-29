import React, { FunctionComponent, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Button, Input, Item } from 'native-base';
import themedColor from '../../../styles/theme/themedColor';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import Margin from '../../shared/Margin';
import { Keyboard } from 'react-native';

interface OwnProps {
  onFilterClick(): void;
  onSearch(value: string): void;
}

const SearchBar: FunctionComponent<OwnProps> = ({
  onFilterClick,
  onSearch
}) => {
  const theme = useContext(ThemeContext);
  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      <InputContainer>
        <Item>
          <Input
            placeholder={'City'}
            value={searchText}
            onChangeText={setSearchText}
          />
          <IconButton
            transparent
            onPress={() => {
              onSearch(searchText);
              Keyboard.dismiss();
            }}>
            <FontAwesomeIcon icon={faSearch} color={theme.colors.PRIMARY} />
          </IconButton>
        </Item>
      </InputContainer>
      <Margin sizeLeft={'7px'} sizeRight={'14px'}>
        <IconButton transparent onPress={onFilterClick}>
          <FontAwesomeIcon icon={faFilter} color={theme.colors.ACCENT} />
        </IconButton>
      </Margin>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${themedColor('WHITE')};
`;

const InputContainer = styled.View`
  flex: 1;
  padding: 14px;
`;

const IconButton = styled(Button)`
  margin: 0 14px;
  justify-content: center;
  background-color: ${themedColor('WHITE')};
`;

export default SearchBar;
