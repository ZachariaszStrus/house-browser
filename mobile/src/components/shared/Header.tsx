import React, { FunctionComponent, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import themedColor from '../../styles/theme/themedColor';
import { SvgXml } from 'react-native-svg';

import kasazLogoSvg from '../../../assets/kasaz.svg';

const Header: FunctionComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <SvgXml
        xml={kasazLogoSvg}
        width={392 * 0.4}
        height={84 * 0.4}
        fill={theme.colors.PRIMARY}
      />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  background-color: ${themedColor('WHITE')};
  height: 60px;
  padding-left: 15px;
`;

export default React.memo(Header);
