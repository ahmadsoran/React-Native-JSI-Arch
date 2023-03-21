import React from 'react';
import {styled, useColorScheme} from 'nativewind';
import {Pressable, Text, View} from 'react-native';
const StyledView = styled(View);
const StyledPressable = styled(Pressable);

export default function HomeScreen() {
  const c = useColorScheme();
  console.log(c.colorScheme);
  return (
    <StyledView className="bg-red-200 p-5 m-5 rounded-xl justify-between items-center flex-row ">
      <Text>Hello</Text>
      <StyledPressable
        className=" bg-red-300 active:bg-blue-500 translate-x-8 p-2 rounded-md border-2 border-slate-800"
        onPress={() => {
          c.toggleColorScheme();
        }}>
        <Text>Hello</Text>
      </StyledPressable>
    </StyledView>
  );
}
