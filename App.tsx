import * as React from 'react';
import {Router} from './src/common/routing/Router';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/common/styles/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
