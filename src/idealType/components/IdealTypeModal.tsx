import React from 'react';
import BottomModal from '../../common/components/BottomModal';
import {MOCK_IDEAL} from '../constants/MOCK_IDEALTYPE';
import {IDEAL_KEY} from '../constants/IDEAL_LIST';
import {MbtiList, PreferredAge} from './IdealTypeModalRenders';
import styled from '@emotion/native';

interface IdealTypeModalProps {
  modalKey: keyof typeof CONSTANT;
  onClose: () => void;
  data: typeof MOCK_IDEAL;
  handleData: (
    key: string,
    value: string | number | string[] | boolean,
  ) => void;
}

const CONSTANT = {
  preferredAge: '선호하는 나이 범위',
  preferredHeight: '선호하는 키 범위',
  mbtiList: '성격 유형',
  smoke: '흡연 여부',
  religion: '종교',
  marriagePlan: '결혼 계획',
};

const IdealTypeModal = ({
  modalKey,
  onClose,
  handleData,
  data,
}: IdealTypeModalProps) => {
  const modalTitle = CONSTANT[modalKey] || '선택해주세요.';

  const handleChangeData = (changedValue: any, modalKey: string) => {
    if (
      modalKey === IDEAL_KEY.preferredAge ||
      modalKey === IDEAL_KEY.preferredHeight
    ) {
      handleData(`${modalKey}Start`, changedValue[0]);
      handleData(`${modalKey}End`, changedValue[1]);
    } else {
      handleData(modalKey, changedValue);
    }
    onClose();
  };

  const renderContent = () => {
    switch (modalKey) {
      case IDEAL_KEY.preferredAge:
        return (
          <PreferredAge
            value={[data.preferredAgeStart, data.preferredAgeEnd]}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.mbtiList:
        return (
          <MbtiList
            value={data.mbtiList}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
    }
  };
  return (
    <BottomModal isVisible={Boolean(modalKey)} onClose={onClose}>
      <StModalWrapper>
        <StTitle>{modalTitle}</StTitle>
        {renderContent()}
      </StModalWrapper>
    </BottomModal>
  );
};

export default IdealTypeModal;

const StTitle = styled.Text`
  color: #303030;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const StModalWrapper = styled.View`
  width: '100%';
  position: 'relative';
  padding-bottom: 122px;
`;
