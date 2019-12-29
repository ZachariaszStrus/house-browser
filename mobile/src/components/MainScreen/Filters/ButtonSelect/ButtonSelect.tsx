import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Button } from 'native-base';
import themedColor from '../../../../styles/theme/themedColor';
import Typography from '../../../shared/Typography';

interface OwnProps<T> {
  label: string;
  selectedValues: T[] | null;
  onValueChange(value: T[] | null): void;
  options: {
    label: string;
    value: T;
  }[];
}

function ButtonSelect<T>({
  label,
  selectedValues,
  onValueChange,
  options
}: OwnProps<T>) {
  const isSelected = useCallback(
    (option: { label: string; value: T }) =>
      selectedValues && selectedValues.indexOf(option.value) !== -1,
    [selectedValues]
  );

  const onPress = useCallback(
    (option: { label: string; value: T }) => {
      const wasSelected = isSelected(option);
      if (wasSelected) {
        onValueChange(
          selectedValues
            ? selectedValues.filter((value) => value !== option.value)
            : null
        );
      } else {
        onValueChange(
          selectedValues ? [...selectedValues, option.value] : [option.value]
        );
      }
    },
    [isSelected, onValueChange, selectedValues]
  );

  const renderButton = useCallback(
    (option: { label: string; value: T }) => {
      const selected = isSelected(option);

      return (
        <StyledButton
          onPress={() => onPress(option)}
          key={option.value}
          selected={selected}>
          <BoldText
            color={selected ? 'WHITE' : 'SECONDARY_TEXT'}
            fontSize={'SUBTITLE'}>
            {option.label}
          </BoldText>
        </StyledButton>
      );
    },
    [isSelected, onPress]
  );

  return (
    <>
      <LabelContainer>
        <Typography>{label}</Typography>
      </LabelContainer>
      <Container>
        <StyledButton
          onPress={() => onValueChange(null)}
          selected={!selectedValues}>
          <BoldText
            color={!selectedValues ? 'WHITE' : 'SECONDARY_TEXT'}
            fontSize={'SUBTITLE'}>
            {'Any'}
          </BoldText>
        </StyledButton>
        {options.map(renderButton)}
      </Container>
    </>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const StyledButton = styled(Button)<{
  selected: boolean;
}>`
  background-color: ${(props) =>
    themedColor(props.selected ? 'ACCENT' : 'WHITE')};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BoldText = styled(Typography)`
  font-weight: bold;
`;

const LabelContainer = styled.View`
  margin-left: 7px;
  margin-top: 20px;
`;

export default ButtonSelect;
