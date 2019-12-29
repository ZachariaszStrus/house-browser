import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { Button } from 'native-base';
import Typography from '../../shared/Typography';
import themedColor from '../../../styles/theme/themedColor';
import Separator from '../../shared/Separator';
import FilterSection from './FilterSection/FilterSection';
import ButtonSelect from './ButtonSelect/ButtonSelect';
import { EstateFilter } from '../../../../../api/src/estates/models/estate-filter';

const PRICE_OPTIONS = [
  {
    label: '100 000',
    value: 100000
  },
  {
    label: '200 000',
    value: 200000
  },
  {
    label: '300 000',
    value: 300000
  },
  {
    label: '400 000',
    value: 400000
  },
  {
    label: '500 000',
    value: 500000
  },
  {
    label: '600 000',
    value: 600000
  },
  {
    label: '750 000',
    value: 750000
  },
  {
    label: '1 000 000',
    value: 1000000
  }
];

const SIZE_OPTIONS = [
  {
    label: '20 m²',
    value: 20
  },
  {
    label: '30 m²',
    value: 30
  },
  {
    label: '40 m²',
    value: 40
  },
  {
    label: '50 m²',
    value: 50
  },
  {
    label: '70 m²',
    value: 70
  },
  {
    label: '100 m²',
    value: 100
  },
  {
    label: '150 m²',
    value: 150
  }
];

const BEDROOM_OPTIONS = [
  {
    label: '1',
    value: 1
  },
  {
    label: '2',
    value: 2
  },
  {
    label: '3',
    value: 3
  },
  {
    label: '4',
    value: 4
  },
  {
    label: '5',
    value: 5
  }
];

interface OwnProps {
  filterOpened: boolean;
  onFilterSubmit(filters: EstateFilter): void;
}

const Filters: FunctionComponent<OwnProps> = ({
  filterOpened,
  onFilterSubmit
}) => {
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [minSize, setMinSize] = useState<number | null>(null);
  const [maxSize, setMaxSize] = useState<number | null>(null);
  const [bedrooms, setBedrooms] = useState<number[] | null>(null);

  const onSearchPress = useCallback(() => {
    onFilterSubmit({
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      bedrooms
    });
  }, [bedrooms, maxPrice, maxSize, minPrice, minSize, onFilterSubmit]);

  return (
    filterOpened && (
      <Container>
        <ContentContainer>
          <FilterSection
            label={'Price'}
            sections={[
              {
                placeholder: 'Min price',
                selectedValue: minPrice,
                onValueChange: setMinPrice,
                options: PRICE_OPTIONS
              },
              {
                placeholder: 'Max price',
                selectedValue: maxPrice,
                onValueChange: setMaxPrice,
                options: PRICE_OPTIONS
              }
            ]}
          />
          <Separator />
          <FilterSection
            label={'Size'}
            sections={[
              {
                placeholder: 'Min size',
                selectedValue: minSize,
                onValueChange: setMinSize,
                options: SIZE_OPTIONS
              },
              {
                placeholder: 'Max size',
                selectedValue: maxSize,
                onValueChange: setMaxSize,
                options: SIZE_OPTIONS
              }
            ]}
          />
          <Separator />

          <ButtonSelect
            label={'Rooms'}
            selectedValues={bedrooms}
            onValueChange={setBedrooms}
            options={BEDROOM_OPTIONS}
          />
        </ContentContainer>

        <StyledButton full onPress={onSearchPress}>
          <BoldText color={'WHITE'} fontSize={'SUBTITLE'}>
            {'SEARCH'}
          </BoldText>
        </StyledButton>
      </Container>
    )
  );
};

const Container = styled.View`
  background-color: ${themedColor('WHITE')};
`;

const ContentContainer = styled.View`
  padding: 14px;
`;

const StyledButton = styled(Button)`
  background-color: ${themedColor('ACCENT')};
`;

const BoldText = styled(Typography)`
  font-weight: bold;
`;

export default Filters;
