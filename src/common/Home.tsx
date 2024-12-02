import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('QnA')}
      />
    </View>
  );
};

export default Home;
