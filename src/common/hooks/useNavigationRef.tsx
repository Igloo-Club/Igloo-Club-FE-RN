import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from '../routing/routerTypes';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    console.log(name, '으로 이동');
    navigationRef.navigate(name, params);
  }
}

export function resetToLogin() {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
    console.log('🔄 네비게이션 스택 리셋 → Login 화면으로 이동');
  } else {
    setTimeout(resetToLogin, 100);
  }
}
