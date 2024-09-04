import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {VITE_KAKAO_REST_API_KEY, VITE_KAKAO_APP_KEY} from '@env';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_APP_KEY}&redirect_uri=${VITE_KAKAO_REST_API_KEY}`,
        }}
        onNavigationStateChange={e => {
          if (e.navigationType === 'formsubmit') {
            navigation.navigate('KakaoLoginRedirect', {
              token: e.url.split('code=')[1],
            });
          }
        }}
      />
    </SafeAreaView>
  );
};

//uri: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_APP_KEY}&redirect_uri=${VITE_KAKAO_REST_API_KEY}`,
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});
