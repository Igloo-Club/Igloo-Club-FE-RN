import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';

const MainPage = ({navigation}: any) => {
  return (
    <View style={globalStyles.container}>
      <DetailButton onPress={navigation.navigate('MainPage')}>
        <BtnMent>상세페이지가기</BtnMent>
      </DetailButton>
    </View>
  );
};

export default MainPage;

const DetailButton = styled(TouchableOpacity)``;

const BtnMent = styled.Text``;
