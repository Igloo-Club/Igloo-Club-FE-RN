import React from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {globalStyles} from '../../common/styles/globalStyles';

const MainPage = ({navigation}: any) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <NavButton onPress={navigation.navigate('Landing')}>
          <BtnMent>상세페이지가기</BtnMent>
        </NavButton>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;

const NavButton = styled(TouchableOpacity)``;

const BtnMent = styled.Text``;
