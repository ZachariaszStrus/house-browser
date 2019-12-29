import { DefaultTheme, ThemedColor } from 'styled-components/native';
import mainTheme from './main.theme';

enum THEMED_COLOR_TYPES {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  BLACK_TRANSPARENT = 'BLACK',
  TRANSPARENT = 'TRANSPARENT',
  PRIMARY = 'PRIMARY',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  ACCENT = 'ACCENT',
  PRIMARY_TEXT = 'PRIMARY_TEXT',
  SECONDARY_TEXT = 'SECONDARY_TEXT',
  BORDER = 'BORDER',
  STATUS_BAR_DEFAULT = 'STATUS_BAR_DEFAULT'
}

const themedColor = (color: ThemedColor, opacity?: string) => (props: {
  theme: DefaultTheme;
}) => {
  const colors = props.theme.colors || mainTheme.colors;
  return colors[color] + (opacity != null ? opacity : '');
};

export { THEMED_COLOR_TYPES };
export default themedColor;
