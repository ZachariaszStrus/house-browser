import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Button } from 'native-base';
import themedColor from '../../../../styles/theme/themedColor';
import Typography from '../../../shared/Typography';
import buttonSelectUtils from './button-select.utils';

export interface ButtonSelectOption<T> {
  label: string;
  value: T;
}

interface OwnProps<T> {
  label: string;
  selectedValues: T[] | null;
  onValueChange(value: T[] | null): void;
  options: ButtonSelectOption<T>[];
}

function ButtonSelect<T>({
  label,
  selectedValues,
  onValueChange,
  options
}: OwnProps<T>) {
  const isSelected = useCallback(
    (option: ButtonSelectOption<T>) =>
      buttonSelectUtils.isSelected(option, selectedValues),
    [selectedValues]
  );

  const onPress = useCallback(
    (option: ButtonSelectOption<T>) =>
      buttonSelectUtils.onPress(option, selectedValues, onValueChange),
    [onValueChange, selectedValues]
  );

  const renderButton = useCallback(
    (option: ButtonSelectOption<T>) => {
      const selected = isSelected(option);

      return (
        <StyledButton
          onPress={() => onPress(option)}
          key={option.label}
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
