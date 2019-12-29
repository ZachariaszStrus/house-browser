import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import themedColor from '../../styles/theme/themedColor';

const HeaderTop: FunctionComponent = () => {
  return (
    <Container>
      <StyledImage source={require('../../../assets/kasaz.png')} />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  background-color: ${themedColor('WHITE')};
  padding-top: 20px;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 150px;
  height: 33px;
`;

export default React.memo(HeaderTop);
