import React, {useState} from 'react';
import styled from '@emotion/native';
import {Animated} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ReceivedNungil from './components/ReceivedNungil';
import SendNungil from './components/SendNungil';
import SoonNungil from './components/SoonNungil';

const scenes = {
  first: ReceivedNungil,
  second: SendNungil,
  third: SoonNungil,
};

const routes = [
  {key: 'first', title: '받은 눈길'},
  {key: 'second', title: '보낸 눈길'},
  {key: 'third', title: '곧 맺어질 눈길'},
];

const NungilList = () => {
  const [index, setIndex] = useState(0);

  const renderTabBar = props => {
    // top nav tab 커스터마이징
    const inputRange = props.navigationState.routes.map((_, i) => i);

    return (
      <TabBar>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TabItem key={route.key} onPress={() => setIndex(i)}>
              <AnimatedText style={{opacity}}>{route.title}</AnimatedText>
            </TabItem>
          );
        })}
      </TabBar>
    );
  };

  return (
    <Container>
      <TabView
        navigationState={{index, routes}} // 현재 활성화된 탭
        renderScene={SceneMap(scenes)} // 위 탭에 해당하는 컴포넌트 렌더링
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </Container>
  );
};

export default NungilList;

const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const TabBar = styled.View`
  flex-direction: row;
  padding: 21px 20px 19px 20px;
  gap: 18px;
`;

const TabItem = styled.TouchableOpacity`
  align-items: center;
`;

const AnimatedText = styled(Animated.Text)`
  color: #303030;
  font-size: 20px;
  font-weight: 700;
`;
