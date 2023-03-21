import {View} from 'moti';
import React from 'react';
import {Text} from 'react-native-paper';
export default function HomeScreen() {
  return (
    <View>
      <Text
        variant="displayLarge"
        onPress={() => console.log('first')}
        style={{color: 'white'}}>
        Home
      </Text>
    </View>
  );
}
