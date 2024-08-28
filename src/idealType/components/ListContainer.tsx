import styled from '@emotion/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface IListContainerProps {
  label: string;
  content: string;

  onModal: () => void;
}

const ListContainer = ({label, content, onModal}: IListContainerProps) => {
  return (
    <StContainer onPress={onModal}>
      <StLabelWrapper>
        <StLabel>{label}</StLabel>
        <StValue>{content}</StValue>
      </StLabelWrapper>
      <StArrow>&gt;</StArrow>
    </StContainer>
  );
};

export default ListContainer;

const StContainer = styled(TouchableOpacity)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ecebf1;
`;

const StLabelWrapper = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StLabel = styled.Text`
  color: #303030;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const StValue = styled.Text`
  color: #878d9b;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const StArrow = styled.Text`
  margin-right: 6px;
`;
