import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapViewComponent from './component/MapViewComponent';
import LinesScreen from './screens/LinesScreen';
import ArrivalPredictionScreen from './screens/ArrivalPredictionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lines" component={LinesScreen} />
        {/* Adicione outras telas aqui se necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
} 
