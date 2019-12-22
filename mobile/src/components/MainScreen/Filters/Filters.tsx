import React, { FunctionComponent, useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Button, Picker } from 'native-base';
import Typography from '../../shared/Typography';
import themedColor from '../../../styles/theme/themedColor';
import { TextStyle } from 'react-native';
import Separator from '../../shared/Separator';

const PRICE_OPTIONS = [
  {
    label: '100 000',
    value: 100000
  },
  {
    label: '200 000',
    value: 200000
  },
  {
    label: '300 000',
    value: 300000
  },
  {
    label: '400 000',
    value: 400000
  },
  {
    label: '500 000',
    value: 500000
  }
];

interface OwnProps {
  filterOpened: boolean;
}

const Filters: FunctionComponent<OwnProps> = ({ filterOpened }) => {
  const theme = useContext(ThemeContext);

  const pickerStyle = useMemo<TextStyle>(
    () => ({
      color: theme.colors.SECONDARY_TEXT,
      fontSize: theme.fontSizes.SUBTITLE
    }),
    [theme.colors.SECONDARY_TEXT, theme.fontSizes.SUBTITLE]
  );

  return (
    filterOpened && (
      <Container>
        <ContentContainer>
          <LabelContainer>
            <Typography>{'Price'}</Typography>
          </LabelContainer>
          <PickersContainer>
            <Picker
              mode="dialog"
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={pickerStyle}>
              <Picker.Item label="Min price" value={null} />
              {PRICE_OPTIONS.map((item) => (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <Picker
              mode="dialog"
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={pickerStyle}>
              <Picker.Item label="Max price" value={null} />
              {PRICE_OPTIONS.map((item) => (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </PickersContainer>
          <Separator />

          <LabelContainer>
            <Typography>{'Size'}</Typography>
          </LabelContainer>
          <PickersContainer>
            <Picker
              mode="dialog"
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={pickerStyle}>
              <Picker.Item label="Min size" value={null} />
              {PRICE_OPTIONS.map((item) => (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
            <Picker
              mode="dialog"
              selectedValue={() => {}}
              onValueChange={() => {}}
              style={pickerStyle}>
              <Picker.Item label="Max size" value={null} />
              {PRICE_OPTIONS.map((item) => (
                <Picker.Item
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </PickersContainer>
          <Separator />

          <LabelContainer>
            <Typography>{'Rooms'}</Typography>
          </LabelContainer>
          <Picker
            mode="dialog"
            selectedValue={() => {}}
            onValueChange={() => {}}
            style={pickerStyle}>
            <Picker.Item label="Any" value={null} />
            {PRICE_OPTIONS.map((item) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </ContentContainer>

        <StyledButton full>
          <BoldText color={'WHITE'} fontSize={'SUBTITLE'}>
            {'SEARCH'}
          </BoldText>
        </StyledButton>
      </Container>
    )
  );
};

const Container = styled.View`
  background-color: ${themedColor('WHITE')};
`;

const ContentContainer = styled.View`
  padding: 14px;
`;

const LabelContainer = styled.View`
  margin-left: 7px;
  margin-top: 20px;
`;

const PickersContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  background-color: ${themedColor('ACCENT')};
`;

const BoldText = styled(Typography)`
  font-weight: bold;
`;

export default Filters;
