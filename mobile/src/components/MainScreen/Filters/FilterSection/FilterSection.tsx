import React, { useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Picker } from 'native-base';
import { Platform, TextStyle } from 'react-native';
import Typography from '../../../shared/Typography';

interface OwnProps<T> {
  label: string;
  sections: {
    placeholder: string;
    selectedValue: T;
    onValueChange(value: T): void;
    options: {
      label: string;
      value: T;
    }[];
  }[];
}

function FilterSection<T>({ label, sections }: OwnProps<T>) {
  const theme = useContext(ThemeContext);

  const pickerStyle = useMemo<TextStyle>(
    () => ({
      color: theme.colors.SECONDARY_TEXT,
      fontSize: theme.fontSizes.SUBTITLE
    }),
    [theme.colors.SECONDARY_TEXT, theme.fontSizes.SUBTITLE]
  );

  return (
    <>
      <LabelContainer>
        <Typography>{label}</Typography>
      </LabelContainer>
      <PickersContainer>
        {sections.map((section) => (
          <Picker
            key={section.placeholder}
            mode="dialog"
            placeholder={section.placeholder}
            selectedValue={section.selectedValue}
            onValueChange={(value, index) => {
              // workaround, the method didnt return value as first arg, but label
              if (Platform.OS === 'ios') {
                section.onValueChange(value);
              } else {
                if (index === 0) section.onValueChange(null);
                else section.onValueChange(section.options[index - 1].value);
              }
            }}
            style={pickerStyle}>
            <Picker.Item
              key={'None'}
              label={section.placeholder}
              value={null}
            />
            {section.options.map((item) => (
              <Picker.Item
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        ))}
      </PickersContainer>
    </>
  );
}

const LabelContainer = styled.View`
  margin-left: 7px;
  margin-top: 20px;
`;

const PickersContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export default FilterSection;
