import * as React from 'react';
import {Router} from './src/common/routing/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/common/styles/theme';
import {IdProvider} from './src/common/apis/contexts/useIdContext';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500); // 예시: 1.5초 후 스플래시 화면 숨기기
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <IdProvider>
        <Router />
      </IdProvider>
    </ThemeProvider>
  );
}

export default App;
