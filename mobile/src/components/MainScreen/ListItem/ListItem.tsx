import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components/native';
import Typography from '../../shared/Typography';
import { Estate } from '../../../../../api/src/estates/models/estate';
import { Dimensions, Image, ImageStyle, StyleProp } from 'react-native';
import themedColor from '../../../styles/theme/themedColor';
import InfoItem from './InfoItem/InfoItem';
import {
  faBath,
  faBed,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

const IMAGE_PLACEHOLDER = require('../../../../assets/photo-placeholder.png');
const SCREEN = Dimensions.get('screen');

interface OwnProps {
  estate: Estate;
}

const ListItem: FunctionComponent<OwnProps> = ({ estate }) => {
  const [imageRatio, setImageRatio] = useState<number | null>(null);

  useEffect(() => {
    Image.getSize(
      estate.image,
      (srcWidth, srcHeight) => {
        setImageRatio(srcWidth / srcHeight);
      },
      () => {}
    );
  }, [estate.image]);

  const pricePerSqm = useMemo(() => estate.price / estate.price, [
    estate.price
  ]);

  const imageStyle = useMemo<StyleProp<ImageStyle>>(
    () =>
      imageRatio
        ? {
            width: '100%',
            minHeight: 100,
            maxHeight: SCREEN.width,
            aspectRatio: imageRatio || 1
          }
        : {
            width: SCREEN.width,
            height: SCREEN.width / 2
          },
    [imageRatio]
  );

  const imageSource = useMemo(
    () => (imageRatio ? { uri: estate.image } : IMAGE_PLACEHOLDER),
    [estate.image, imageRatio]
  );

  return (
    <Container>
      <ImageContainer>
        <Image style={imageStyle} source={imageSource} />
        <PriceContainer>
          <PriceText
            fontSize={'TITLE_LARGE'}
            color={'WHITE'}>{`${estate.price} €`}</PriceText>
          <PriceText
            fontSize={'TITLE_LARGE'}
            color={'WHITE'}>{` / `}</PriceText>
          <Typography
            fontSize={'SUBTITLE'}
            color={'WHITE'}>{`${pricePerSqm.toFixed(3)} €/m²`}</Typography>
        </PriceContainer>
      </ImageContainer>
      <InfoContainer>
        <Typography fontSize={'TITLE'}>{estate.title}</Typography>
        <InfoBottomContainer>
          <InfoItem text={`${estate.squareMeters} m²`} icon={faCheckSquare} />
          <InfoItemSeparator />
          <InfoItem text={`${estate.bedrooms} bedrooms`} icon={faBed} />
          <InfoItemSeparator />
          <InfoItem text={`${estate.bathrooms} bathrooms`} icon={faBath} />
        </InfoBottomContainer>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${themedColor('WHITE')};
  margin: 7px 14px;
`;

const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const PriceContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  background-color: ${themedColor('BLACK_TRANSPARENT')};
`;

const PriceText = styled(Typography)`
  font-weight: bold;
`;

const InfoContainer = styled.View`
  padding: 15px 20px;
`;

const InfoBottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const InfoItemSeparator = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${themedColor('BORDER')};
`;

export default React.memo(ListItem);
