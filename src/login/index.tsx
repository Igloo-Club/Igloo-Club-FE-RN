import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {VITE_KAKAO_REST_API_KEY, VITE_REDIRECT_URI} from '@env';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const Login = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webview}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${VITE_REDIRECT_URI}&response_type=code`,
        }}
        onNavigationStateChange={e => {
          console.log(e.url);
          if (e.url.includes(VITE_REDIRECT_URI)) {
            // URL에서 인가 코드 추출
            const authorizationCode = e.url.split('code=')[1];
            if (authorizationCode) {
              // 여기서 인가 코드를 사용하여 토큰 요청을 처리
              console.log('Authorization Code:', authorizationCode);
              navigation.navigate('KakaoLoginRedirect', {
                token: authorizationCode,
              });
            }
          }
        }}
        // onNavigationStateChange={e => {
        //   console.log(e.navigationType);
        //   if (e.navigationType === 'formsubmit') {
        //     navigation.navigate('KakaoLoginRedirect', {
        //       token: e.url.split('code=')[1],
        //     });
        //   }
        // }}
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
