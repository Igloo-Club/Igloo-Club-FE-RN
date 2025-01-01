import React from 'react';
import BottomModal from '../../common/components/BottomModal';
import {IDEAL_KEY} from '../constants/IDEAL_LIST';
import {
  선호나이,
  선호키,
  선호성격유형,
  선호흡연여부,
  선호종교,
  선호결혼계획,
} from './IdealTypeModalRenders';
import styled from '@emotion/native';
import {IidealType} from '../types/idealType';

interface IdealTypeModalProps {
  modalKey: keyof typeof CONSTANT;
  onClose: () => void;
  data: IidealType | undefined;
  handleData: (
    key: string,
    value: string | number | string[] | boolean,
  ) => void;
}

const CONSTANT = {
  preferredAge: '선호하는 나이 범위',
  preferredHeight: '선호하는 키 범위',
  mbtiElemList: '성격 유형',
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
  if (!data) {
    return;
  }
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
    if (!data.preferredAgeEnd || !data.preferredAgeStart) {
      return;
    }
    switch (modalKey) {
      case IDEAL_KEY.preferredAge:
        return (
          <선호나이
            value={[data.preferredAgeStart, data.preferredAgeEnd]}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.preferredHeight:
        if (!data.preferredHeightEnd || !data.preferredHeightStart) {
          return;
        }
        return (
          <선호키
            value={[data.preferredHeightStart, data.preferredHeightEnd]}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.mbtiElemList:
        return (
          <선호성격유형
            value={data.mbtiElemList}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.smoke:
        if (data.smoke === undefined) {
          return;
        }
        return (
          <선호흡연여부
            value={Number(data.smoke)}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.religion:
        if (!data.religion) {
          return;
        }
        return (
          <선호종교
            value={data.religion}
            handleData={changedValue => {
              handleChangeData(changedValue, modalKey);
            }}
          />
        );
      case IDEAL_KEY.marriagePlan:
        if (typeof data.marriagePlan === 'undefined') {
          return;
        }
        return (
          <선호결혼계획
            value={data.marriagePlan}
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
  letter-spacing: -0.3px;
`;

const StModalWrapper = styled.View`
  width: '100%';
  position: 'relative';
  padding: 20px 20px 120px;
`;
