// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapViewComponent from './component/MapViewComponent';
import LinesScreen from './screens/LinesScreen';
import ArrivalPredictionScreen from './screens/ArrivalPredictionScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Map">
                <Stack.Screen name="Map" component={MapViewComponent} />
                <Stack.Screen name="Lines" component={LinesScreen} />
                <Stack.Screen name="ArrivalPrediction" component={ArrivalPredictionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
