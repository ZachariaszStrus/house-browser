import buttonSelectUtils from '../button-select.utils';

describe('ButtonSelect', () => {
  it('isSelected returns true correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = [1, 2, 3];

    expect(buttonSelectUtils.isSelected(option, selectedValues)).toBe(true);
  });

  it('isSelected returns false correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = [2, 3];

    expect(buttonSelectUtils.isSelected(option, selectedValues)).toBe(false);
  });

  it('onPress adds new value correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = [2, 3];
    const onValueChange = jest.fn();

    buttonSelectUtils.onPress(option, selectedValues, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith([2, 3, 1]);
  });

  it('onPress removes value correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = [1, 2, 3];
    const onValueChange = jest.fn();

    buttonSelectUtils.onPress(option, selectedValues, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith([2, 3]);
  });

  it('onPress returns null correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = [1];
    const onValueChange = jest.fn();

    buttonSelectUtils.onPress(option, selectedValues, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith(null);
  });

  it('onPress adds when selectedValues = null correctly', () => {
    const option = {
      label: '1',
      value: 1
    };
    const selectedValues = null;
    const onValueChange = jest.fn();

    buttonSelectUtils.onPress(option, selectedValues, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith([1]);
  });
});
