import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import themedColor from '../../styles/theme/themedColor';
import Typography from './Typography';

const HeaderTop: FunctionComponent = () => {
  return (
    <Container>
      <Typography fontSize={'TITLE_LARGE'}>{'House browser'}</Typography>
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

export default React.memo(HeaderTop);
