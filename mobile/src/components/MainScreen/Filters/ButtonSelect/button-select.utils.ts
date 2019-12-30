import { ButtonSelectOption } from './ButtonSelect';

const buttonSelectUtils = {
  isSelected: <T>(option: ButtonSelectOption<T>, selectedValues: T[]) =>
    selectedValues && selectedValues.indexOf(option.value) !== -1,

  onPress: <T>(
    option: ButtonSelectOption<T>,
    selectedValues: T[],
    onValueChange: (val: T[]) => void
  ) => {
    const wasSelected = buttonSelectUtils.isSelected(option, selectedValues);
    if (wasSelected) {
      onValueChange(
        selectedValues && selectedValues.length > 1
          ? selectedValues.filter((value) => value !== option.value)
          : null
      );
    } else {
      onValueChange(
        selectedValues ? [...selectedValues, option.value] : [option.value]
      );
    }
  }
};

export default buttonSelectUtils;
