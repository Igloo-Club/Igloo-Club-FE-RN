import React from 'react';
import {Button, Text, View} from 'react-native';

export const Details = ({navigation}: any) => {
  return (
    <View>
      <Text>Details</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
