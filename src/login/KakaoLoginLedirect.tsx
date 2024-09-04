import axios from 'axios';
import {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-svg';

const KakaoLoginRedirect({navigation, route}) {
  // params로 인가 코드 넘어옴
  const code = route.params.token;

  useEffect(() => {
    // 인가 코드가 정상적으로 넘어왔다면 백엔드 서버로 전달
    if (code) {
      // CSRF 토큰 가져오기
      try {
        axios.post('', {data: code});
      } catch (err) {
        console.log(err);
      }
    }
  }, [code]);
  return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
}

export default KakaoLoginRedirect

//an error in the service settings prevents the service from being used.