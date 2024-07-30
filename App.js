import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinesScreen from './screens/lines/LinesScreen';
import VehiclesScreen from './screens/vehicles/VehiclesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lines" component={LinesScreen} />
        <Stack.Screen name="Vehicles" component={VehiclesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
