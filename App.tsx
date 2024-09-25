import * as React from 'react';
import {Router} from './src/common/routing/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/common/styles/theme';
import {IdProvider} from './src/common/apis/contexts/useIdContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <IdProvider>
        <Router />
      </IdProvider>
    </ThemeProvider>
  );
}

export default App;
