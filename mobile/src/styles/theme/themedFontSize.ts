import { DefaultTheme } from 'styled-components/native';

enum THEMED_FONT_SIZE_TYPES {
  TITLE_LARGE = 'TITLE_LARGE',
  TITLE = 'TITLE',
  SUBTITLE = 'SUBTITLE',
  CAPTION = 'CAPTION'
}

const themedFontSize = (
  fontSize: keyof typeof THEMED_FONT_SIZE_TYPES
) => (props: { theme: DefaultTheme }) => props.theme.fontSizes[fontSize] + 'px';

export { THEMED_FONT_SIZE_TYPES };
export default themedFontSize;
