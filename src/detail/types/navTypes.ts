import {DetailProfileTypes} from './detailProfileTypes';

export interface NavTypesProps {
  onPrev: () => void;
  onNext: () => void;
  handleDetailProfileValue?: (data: DetailProfileTypes) => void;
  detailProfileValues: DetailProfileTypes;
}
