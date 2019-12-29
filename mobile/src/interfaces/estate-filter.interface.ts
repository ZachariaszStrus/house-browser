export interface IEstateFilter {
  price?: {
    $gte?: number;
    $lte?: number;
  };
  squareMeters?: {
    $gte?: number;
    $lte?: number;
  };
  bedrooms?: number[];
}
