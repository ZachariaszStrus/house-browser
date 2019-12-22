import React, { FunctionComponent, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import styled, { ThemeContext } from 'styled-components/native';
import Typography from '../../../shared/Typography';
import Margin from '../../../shared/Margin';

interface OwnProps {
  text: string;
  icon: IconDefinition;
}

const InfoItem: FunctionComponent<OwnProps> = ({ text, icon }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <FontAwesomeIcon icon={icon} color={theme.colors.SECONDARY_TEXT} />
      <Margin sizeLeft={'7px'} sizeTop={'3px'}>
        <Typography fontSize={'SUBTITLE'} color={'SECONDARY_TEXT'}>
          {text}
        </Typography>
      </Margin>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default InfoItem;
