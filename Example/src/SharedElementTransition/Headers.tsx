import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Animated from 'react-native-reanimated';
import { StackScreenProps } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

function Screen1({ navigation }: StackScreenProps<ParamListBase>) {
  return (
    <Animated.ScrollView style={{ flex: 1 }}>
      <Animated.View
        style={{ width: '100%', height: 100, backgroundColor: 'green' }}
        sharedTransitionTag="mleko"
      />
      <Button
        onPress={() => navigation.navigate('Screen2')}
        title="go to screen2"
      />
    </Animated.ScrollView>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'green',
          marginTop: 0,
        }}
        sharedTransitionTag="mleko"
      />
    </View>
  );
}

export default function SimpleSharedElementTransition() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
